<?php

namespace App\Http\Controllers;

use App\Models\AttendanceLog;
use App\Models\Community\Tanent;
use App\Models\Visitor;
use Illuminate\Support\Facades\DB;

class AccessControlController extends Controller
{
    public function getUniqueUsers()
    {

        $tanents = [];
        $visitors = [];
        $employees = [];


        $user_type = '';
        if (request()->filled("user_type")) {
            $user_type = request("user_type");

            if ($user_type == 'maid') {
                $user_type = 'Maid';
            }
        }

        if ($user_type == 'Owner') {
            $tanents = DB::table('tanents')->where("member_type", "Owner")
                ->join('rooms', 'tanents.room_id', '=', 'rooms.id') // Join with the rooms table
                ->orderBy("first_name", "asc")
                ->get(['tanents.id', DB::raw('full_name || \' - \' || rooms.room_number  as full_name'), 'tanents.system_user_id']) // Include the room_name column from the rooms table
                ->toArray();
        } else if ($user_type == 'Maid') {
            $tanents = DB::table('tanents')->where("member_type", "Maid")
                ->join('rooms', 'tanents.room_id', '=', 'rooms.id') // Join with the rooms table
                ->orderBy("first_name", "asc")
                ->get(['tanents.id', DB::raw('full_name || \' - \' || rooms.room_number  as full_name'), 'tanents.system_user_id']) // Include the room_name column from the rooms table
                ->toArray();
        } else if ($user_type == 'tanent') {
            $tanents = DB::table('tanents')->whereIn("member_type", ["Primary", "Family Member"])
                ->join('rooms', 'tanents.room_id', '=', 'rooms.id') // Join with the rooms table
                ->orderBy("first_name", "asc")
                ->get(['tanents.id', DB::raw('full_name || \' - \' || rooms.room_number  as full_name'), 'tanents.system_user_id']) // Include the room_name column from the rooms table
                ->toArray();
        }

        if ($user_type == 'visitor' || $user_type == 'delivery' || $user_type == 'contractor') {
            $visitors = DB::table('visitors');
            if ($user_type == 'visitor') {
                $visitors->where("visitor_type", "visitor");
            } else if ($user_type == 'delivery') {
                $visitors->where("visitor_type", "delivery");
            } else if ($user_type == 'contractor') {
                $visitors->where("visitor_type", "contractor");
            }
            $visitors->orderBy("first_name", "asc");
            $visitors = $visitors->get(["id", DB::raw('first_name || \' \' || last_name  as full_name'), "system_user_id"])


                ->toArray();
        }
        if ($user_type == 'employee') {
            $employees = DB::table('employees')
                ->orderBy("first_name", "asc")
                ->get(["id", "full_name", "system_user_id"])->toArray();
        }

        return array_merge($tanents, $visitors, $employees);
    }
    public function index()
    {
        return $this->processFilter()->orderBy("id", "desc")->paginate(request("per_page") ?? 100);
    }

    public function search_visitor_by_user_id()
    {
        return  Visitor::orderBy("id", "desc")->with(["attendance_logs", "purpose"])->where("system_user_id", request("UserID"))->first();
    }

    public function get_logs_by_visitor_id()
    {
        return  Visitor::with(["attendance_logs.visitor.tanent.room", "attendance_logs.contractor.tanent.room", "attendance_logs.delivery.tanent.room", "purpose"])->where("id", request("id"))
            ->first();
    }

    public function get_logs_by_tanent_id()
    {
        return  Tanent::with(["attendance_logs"])->where("id", request("id"))->first();
    }



    public function processFilter()
    {
        $model = AttendanceLog::query();

        $model->where("company_id", request("company_id"));

        $model->whereDate('LogTime', '>=', request()->filled("from_date") && request("from_date") !== 'null' ? request("from_date") : date("Y-m-d"));

        $model->whereDate('LogTime', '<=', request()->filled("to_date") && request("to_date") !== 'null' ? request("to_date") : date("Y-m-d"));

        // $model->whereHas('device', fn ($q) => $q->whereIn('device_type', ["all", "Access Control"]));

        $model->when(request()->filled("user_type"), fn ($q) => $q->whereHas(request("user_type")));

        $model->when(request()->filled("report_type") && request("report_type") == 'Access Denied', fn ($q) => $q->where('status', request("report_type")));

        $model->when(request()->filled("UserID"), fn ($q) => $q->where('UserID', request("UserID")));

        $model->when(request()->filled("DeviceID"), fn ($q) => $q->where('DeviceID', request("DeviceID")));

        $model->with(["device", "tanent", "family_member", "visitor", "delivery", "contractor", "maid", "owner"]);

        $model->with('employee', function ($q) {
            $q->where('company_id', request("company_id"));
            $q->withOut(["schedule", "sub_department", "designation", "user"]);

            $q->select(
                "first_name",
                "last_name",
                "phone_number",
                "profile_picture",
                "employee_id",
                "branch_id",
                "system_user_id",
                "display_name",
                "timezone_id",
                "department_id",
            );
        });

        // $model->when($request->filled('mode'), function ($q) use ($request) {
        //     $q->whereHas('device', fn (Builder $query) => $query->where('mode', $request->mode));
        // });
        // $model->when($request->filled('function'), function ($q) use ($request) {
        //     $q->whereHas('device', fn (Builder $query) => $query->where('function', $request->function));
        // });

        return $model;
    }
}
