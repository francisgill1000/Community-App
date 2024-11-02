<?php

namespace App\Http\Controllers\Community;

use Illuminate\Http\Request;
use App\Models\AttendanceLog;
use App\Http\Controllers\Controller;
use App\Models\Community\CommunityReport;
use App\Models\Company;
use Barryvdh\DomPDF\Facade\Pdf;

class EmployeeReportController extends Controller
{
    public function renderData(Request $request)
    {
        // Extract start and end dates from the JSON data
        $startDateString = $request->dates[0];
        //$endDateString = $request->dates[1];
        if (isset($request->dates[1])) {
            $endDateString = $request->dates[1];
        } else {
            $endDateString = $request->dates[0];
        }
        $company_id = $request->company_ids[0];
        $employee_ids = $request->employee_ids;

        // Convert start and end dates to DateTime objects
        $startDate = new \DateTime($startDateString);
        $endDate = new \DateTime($endDateString);
        $currentDate = new \DateTime();

        $response = [];

        // while ($startDate <= $currentDate && $startDate <= $endDate) {
        while ($startDate <= $endDate) {
            //$response[] = $this->render($company_id, $startDate->format("Y-m-d"), 1, $employee_ids, true);
            $response[] = $this->render($company_id, $startDate->format("Y-m-d"), 1, $employee_ids, $request->filled("auto_render") ? false : true);


            $startDate->modify('+1 day');
        }

        return $response;
    }

    public function renderRequest(Request $request)
    {
        return $this->render($request->company_id ?? 0, $request->date ?? date("Y-m-d"), $request->UserIds, true);
    }

    public function getUserDetails($system_user_id)
    {
        $userTypes = ['\\App\\Models\\Employee', '\\App\\Models\\Community\\Tanent', '\\App\\Models\\Visitor'];

        foreach ($userTypes as $userType) {

            $user = $userType::where('system_user_id', $system_user_id)->orderBy('id', 'desc')->first();

            $user_type = "employee";


            if ($user) {
                if ($user->member_type) {
                    $user_type = $user->member_type;
                }
                if ($user->visitor_type) {
                    $user_type = $user->visitor_type;
                }
                return [
                    $user_type => $user,
                ];
            }
        }

        return [
            $user_type => $user,
        ];
    }

    public function render($companyId, $date, $userIds = [], $customRender = false)
    {
        $params = [
            "company_id" => $companyId,
            "date" => $date,
            "custom_render" => $customRender,
            "UserIds" => $userIds,
        ];

        if (!$customRender) {
            $userIds = AttendanceLog::where("company_id", $companyId)
                ->where("checked", false) // Only today's records
                ->whereDate("LogTime", '=', $date) // Only today's records
                ->distinct("visitor_id", "company_id")
                ->pluck('UserID');
        }

        $userLogs = AttendanceLog::whereDate("LogTime", '=', $date) // Only today's records
            //->where("checked", false)
            ->where("visitor_id", 0)
            ->whereIn("UserID", $userIds)
            ->where("company_id", $companyId)
            ->distinct("LogTime", "UserID", "company_id")
            ->with(["device", "tanent", "family_member", "visitor", "delivery", "contractor", "maid"])
            ->orderBy("LogTime", "asc")
            ->get()
            ->groupBy('UserID');

        //update atendance table with shift ID if shift with employee not found 
        if (count($userLogs) == 0) {
            return "No Record found";
        }

        $items = [];
        $message = "";

        $in_ids = [];
        $out_ids = [];
        foreach ($userLogs as $key => $logs) {



            $logs = $logs->toArray() ?? [];

            $firstLog = collect($logs)->filter(function ($record) {
                return isset($record["device"]["function"]) && ($record["device"]["function"] !== "Out");
            })->first();

            $lastLog = collect($logs)->filter(function ($record) {
                return isset($record["device"]["function"]) && ($record["device"]["function"] !== "In");
            })->last();


            $userDetails = $this->getUserDetails($firstLog['UserID']);

            $userKey = array_key_first($userDetails);
            $item = [];
            $item = [
                "user_id" =>   $key,
                "user_type" =>  $userKey,
                "total_hrs" => '00:00',
                "in_id" => $firstLog["id"],
                "status" => "in",

                "out_id" => "0",

                "total_hrs" => "0",





            ];
            if ($item["in_id"])
                $in_ids[] =   $item["in_id"];

            if ($lastLog) {
                $item["out_id"] = $lastLog["id"] ?? 0;
                $item["status"] = "out";
                $item["total_hrs"] = $this->getTotalHrsMins($firstLog["time"] ?? 0, $lastLog["time"] ?? 0);


                $out_ids[] = $item["out_id"];
            }

            $item["date"] = $params["date"];
            $items[] = $item;
        }
        //return json_encode($items);
        if (!count($items)) {
            return '[' . $date . " " . date("H:i:s") . '] No data found' . $message;
        }

        try {
            $user_ids = array_column($items, "user_id");
            $model = CommunityReport::query();
            $model->whereIn("user_id", $user_ids);
            $model->where("date", $date);
            $model->delete();
            $model->insert($items);

            AttendanceLog::where("company_id", $companyId)->whereIn("id", $in_ids)->update(["log_type" => 'in']);
            AttendanceLog::where("company_id", $companyId)->whereIn("id", $out_ids)->update(["log_type" => 'out']);
            AttendanceLog::where("company_id", $companyId)->whereIn("UserID", $userIds)->update(["checked" => true, "checked_datetime" => date('Y-m-d H:i:s')]);
            return $message = "[" . $date . " " . date("H:i:s") .  "].  Affected Ids: " . json_encode($userIds) . " " . $message;
        } catch (\Throwable $e) {
            return  $message = "[" . $date . " " . date("H:i:s") .  "]. " . $e->getMessage();
        }
    }
}
