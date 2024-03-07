<?php

namespace App\Http\Controllers\Community;

use Illuminate\Http\Request;
use App\Models\AttendanceLog;
use App\Http\Controllers\Controller;
use App\Models\Community\CommunityReport;
use App\Models\Company;
use Barryvdh\DomPDF\Facade\Pdf;

class ReportController extends Controller
{
    public function index()
    {
        return $this->processFilter()->paginate(request("per_page") ?? 10);
    }

    public function print(Request $request)
    {
        $data = $this->processFilter()->get()->toArray();

        if ($request->debug) return $data;

        $chunks = array_chunk($data, 10);

        return Pdf::setPaper('a4', 'landscape')->loadView('pdf.community.report', [
            "chunks" => $chunks,
            "company" => Company::whereId(request("company_id") ?? 0)->first(),
            "params" => $request->all(),

        ])->stream();
    }
    public function download(Request $request)
    {
        $data = $this->processFilter()->get()->toArray();

        if ($request->debug) return $data;

        $chunks = array_chunk($data, 10);

        return Pdf::setPaper('a4', 'landscape')->loadView('pdf.community.report', [
            "chunks" => $chunks,
            "company" => Company::whereId(request("company_id") ?? 0)->first(),
            "params" => $request->all(),

        ])->download();
    }
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
        return $this->render($request->company_id ?? 0, $request->id, $request->date ?? date("Y-m-d"), $request->UserIds, true);
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
                ->distinct("UserID", "company_id")
                ->pluck('UserID');
        }

        $userLogs = AttendanceLog::whereDate("LogTime", '=', $date) // Only today's records

            ->whereIn("UserID", $userIds)
            ->where("company_id", $companyId)
            ->distinct("LogTime", "UserID", "company_id")
            ->with(["device", "tanent", "family_member", "visitor", "delivery", "contractor", "maid"])
            ->orderBy("LogTime", "asc")
            ->get()
            ->groupBy('UserID');


        //update atendance table with shift ID if shift with employee not found 
        if (count($userLogs) == 0) {
            return false;
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

            $firstLog = $logs[0];
            $lastLog = $logs[count($logs) - 1];

            $userDetails = $this->getUserDetails($key);



            $userKey = array_key_first($userDetails);

            $item = [
                "user_id" =>   $userDetails[$userKey]["id"],
                "user_type" =>  $userKey,
                "total_hrs" => '00:00',
                "in_id" => $firstLog["id"],
                "status" => "in",

            ];
            $in_ids[] = $firstLog["id"];

            if ($lastLog && count($logs) > 1) {
                $item["out_id"] = $lastLog["id"] ?? 0;
                $item["status"] = "out";
                $item["total_hrs"] = $this->getTotalHrsMins($firstLog["time"] ?? 0, $lastLog["time"] ?? 0);

                if ($lastLog["id"])
                    $out_ids[] = $item["out_id"];
            }

            $item["date"] = $params["date"];
            $items[] = $item;
        }

        if (!count($items)) {
            return '[' . $date . " " . date("H:i:s") . '] No data found' . $message;
        }

        //try {
        $user_ids = array_column($items, "user_id");
        $model = CommunityReport::query();
        $model->whereIn("user_id", $user_ids);
        $model->where("date", $date);
        $model->delete();
        // $chunks = array_chunk($items, 100);

        // foreach ($chunks as $chunk) {
        //     $model->insert($chunk);
        // }
        $model->insert($items);


        AttendanceLog::where("company_id", $companyId)->whereIn("id", $in_ids)->update(["log_type" => 'in']);
        AttendanceLog::where("company_id", $companyId)->whereIn("id", $out_ids)->update(["log_type" => 'out']);


        //if (!$customRender) {
        AttendanceLog::where("company_id", $companyId)->whereIn("UserID", $userIds)->update(["checked" => true, "checked_datetime" => date('Y-m-d H:i:s')]);
        //}
        $message = "[" . $date . " " . date("H:i:s") .  "].  Affected Ids: " . json_encode($userIds) . " " . $message;
        // } catch (\Throwable $e) {
        //     return  $message = "[" . $date . " " . date("H:i:s") .  "]. " . $e->getMessage();
        // }

        $this->devLog("render-manual-log", $message);
        return ($message);
    }

    public function processFilter()
    {

        $query = CommunityReport::query();

        //$query->when(request()->filled("user_type"), fn ($q) => $q->where("user_type", request("user_type")));

        if (request()->filled("user_type")) {
            if (request("user_type") == 'tanent') {
                $query->whereIn("user_type", ["Owner", "Primary", "Family Member", "Maid"]);

                $query->with([

                    "tanent",
                    "family_member",
                    "owner",


                ]);
            } else if (request("user_type") == 'maid') {
                $query->where("user_type", request("user_type"));
                $query->with([
                    "maid",


                ]);
            } else if (request("user_type") == 'visitor') {
                $query->where("user_type", request("user_type"));
                $query->with([
                    "visitor",


                ]);
            } else if (request("user_type") == 'delivery') {
                $query->where("user_type", request("user_type"));
                $query->with([

                    "delivery",

                ]);
            } else if (request("user_type") == 'contractor') {
                $query->where("user_type", request("user_type"));
                $query->with([


                    "contractor",
                ]);
            } else if (request("user_type") == 'employee') {
                $query->where("user_type", request("user_type"));
                $query->with([

                    'employee:id,first_name,last_name,phone_number,profile_picture,employee_id,branch_id,system_user_id,display_name,department_id'

                ]);
            }
        }

        $query->when(request()->filled("UserID"), function ($q) {
            $q->whereHas("in_log", function ($qu) {
                $qu->where('UserID', request("UserID"));
            });
        });

        $query->when(request()->filled("DeviceID"), function ($query) {
            $query->where(function ($q) {
                $q->whereHas("in_log", function ($qu) {
                    $qu->where('DeviceID', request("DeviceID"));
                });
                $q->orWhereHas("out_log", function ($qu) {
                    $qu->where('DeviceID', request("DeviceID"));
                });
            });
        });
        $query->when(request()->filled("from_date"), function ($q) {

            $q->where('date', '>=', request("from_date"));
        });
        $query->when(request()->filled("to_date"), function ($q) {

            $q->where('date', '<=', request("to_date"));
        });
        // $query->when(request()->filled("from_date"), function ($query) {
        //     $query->where(function ($q) {
        //         $q->whereHas("in_log", function ($qu) {
        //             $qu->whereDate('LogTime', '>=', request("from_date", date("Y-m-d")));
        //         });
        //         $q->orWhereHas("out_log", function ($qu) {
        //             $qu->whereDate('LogTime', '>=', request("from_date", date("Y-m-d")));
        //         });
        //     });
        // });

        // $query->when(request()->filled("to_date"), function ($query) {
        //     $query->where(function ($q) {
        //         $q->whereHas("in_log", function ($qu) {
        //             $qu->whereDate('LogTime', '<=', request("to_date", date("Y-m-d")));
        //         });
        //         $q->orWhereHas("out_log", function ($qu) {
        //             $qu->whereDate('LogTime', '<=', request("to_date", date("Y-m-d")));
        //         });
        //     });
        // });

        $query->with([
            "in_log",
            "out_log",


        ]);

        return $query;
    }
}
