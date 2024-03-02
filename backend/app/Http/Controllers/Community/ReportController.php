<?php

namespace App\Http\Controllers\Community;

use App\Models\Attendance;
use Illuminate\Http\Request;
use App\Models\AttendanceLog;
use App\Http\Controllers\Controller;
use App\Models\Employee;

class ReportController extends Controller
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
                ->where("checked", false)
                ->whereDate("LogTime", '=', $date) // Only today's records
                ->distinct("UserID", "company_id")
                ->pluck('UserID');

            return $userIds;
        }

        $userLogs = AttendanceLog::whereDate("LogTime", '=', $date) // Only today's records
            ->whereIn("UserID", $userIds)
            ->where("company_id", $companyId)
            ->distinct("LogTime", "UserID", "company_id")
            ->with(["device", "tenant", "family_member", "relative", "visitor", "delivery", "contractor", "maid"])
            ->get()
            ->groupBy('UserID');

        return $userLogs;

        $userLogs =  (new AttendanceLog)->getLogsForRender($params);

        //update atendance table with shift ID if shift with employee not found 
        if (count($userLogs) == 0) {
            return false;
        }

        $items = [];
        $message = "";
        foreach ($userLogs as $key => $logs) {

            $logs = $logs->toArray() ?? [];

            // $firstLog = collect($logs)->filter(fn ($record) => $record['log_type'] !== "out")->first();
            // $lastLog = collect($logs)->filter(fn ($record) => $record['log_type'] !== "in")->last();


            $firstLog = collect($logs)->filter(function ($record) {
                return isset($record["device"]["function"]) && ($record["device"]["function"] !== "Out");
            })->first();

            $lastLog = collect($logs)->filter(function ($record) {
                return isset($record["device"]["function"]) && ($record["device"]["function"] !== "In");
            })->last();

            $schedule = $firstLog["schedule"] ?? false;
            $shift = $schedule["shift"] ?? false;

            if (!$schedule) {
                $message .= ".  No schedule is mapped with combination  System User Id: $key   and Date : " . $params["date"] . " ";
                continue;
            }
            if (!$firstLog["schedule"]["shift_type_id"]) {
                $message .= "$key : None f=of the  Master shift configured on  date:" . $params["date"];
                continue;
            }


            $item = [
                "in" => $firstLog["time"] ?? "---",
                "out" =>  "---",
                "device_id_in" =>  $firstLog["DeviceID"] ?? "---",
                "device_id_out" => "---",
                "date" => $params["date"],
                "company_id" => $params["company_id"],
                "user_id" => $key,
            ];

            if ($shift && $lastLog && count($logs) > 1) {
                $item["device_id_out"] = $lastLog["DeviceID"] ?? "---";
                $item["out"] = $lastLog["time"] ?? "---";
            }
            $items[] = $item;
        }

        if (!count($items)) {
            $message = '[' . $date . " " . date("H:i:s") . '] Filo Shift: No data found' . $message;
            $this->devLog("render-manual-log", $message);
            return $message;
        }

        try {
            $UserIds = array_column($items, "employee_id");
            $model = Attendance::query();
            $model->where("company_id", $companyId);
            $model->whereIn("employee_id", $UserIds);
            $model->where("date", $date);
            $model->delete();
            // $chunks = array_chunk($items, 100);

            // foreach ($chunks as $chunk) {
            //     $model->insert($chunk);
            // }
            $model->insert($items);

            if (!$customRender) {
                AttendanceLog::where("company_id", $companyId)->whereIn("UserID", $UserIds)->update(["checked" => true, "checked_datetime" => date('Y-m-d H:i:s')]);
            }
            $message = "[" . $date . " " . date("H:i:s") .  "] Filo Shift.  Affected Ids: " . json_encode($UserIds) . " " . $message;
        } catch (\Throwable $e) {
            $message = "[" . $date . " " . date("H:i:s") .  "] Filo Shift. " . $e->getMessage();
        }

        $this->devLog("render-manual-log", $message);
        return ($message);
    }
}
