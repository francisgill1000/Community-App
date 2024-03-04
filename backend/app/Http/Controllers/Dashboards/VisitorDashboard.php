<?php

namespace App\Http\Controllers\Dashboards;

use App\Http\Controllers\Controller;

use App\Models\Attendance;
use App\Models\AttendanceLog;
use App\Models\Device;
use App\Models\Employee;
use App\Models\HostCompany;
use App\Models\Leave;
use App\Models\Visitor;
use App\Models\VisitorAttendance;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;

class VisitorDashboard extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function timeTOSeconds($str_time)
    {


        return  $seconds = strtotime($str_time) - strtotime('TODAY');
    }
    public function __invoke(Request $request)
    {
        $date = date("Y-m-d");



        $id = $request->company_id ?? 0;

        $Visitors = Visitor::query();

        $Visitors->whereCompanyId($id);
        $Visitors->when($request->filled('branch_id'), function ($q) use ($request) {
            $q->where('branch_id',   $request->branch_id);
        });

        $Visitors->where("visit_from", "<=", $date);
        $Visitors->where("visit_to", ">=", $date);

        $VisitorAttendance = AttendanceLog::query();
        $VisitorAttendance->whereCompanyId($id);
        $VisitorAttendance->where("visitor_id", ">", 0);
        $VisitorAttendance->when($request->filled('branch_id'), function ($q) use ($request) {
            $q->where('branch_id',   $request->branch_id);
        });;
        $VisitorAttendance->whereDate("LogTime",  $date);
        if ($request->filled("visitor_type")) {
            $VisitorAttendance->with([request("visitor_type")]);
            $Visitors->where("visitor_type",  request("visitor_type"));
            $VisitorAttendance->whereHas(request("visitor_type"), fn ($q) => $q->where("visitor_type",  request("visitor_type")));
        }



        $ExpectingCount = $Visitors->clone()->get()->count();
        //$Visitors->clone()->whereNotIn("id", $VisitorAttendance->clone()->pluck("visitor_id"))->get()->count();
        $CheckedInCount = $Visitors->clone()->whereIn("id", $VisitorAttendance->clone()->pluck("visitor_id"))->get()->count();


        $CheckedOutCount =   $VisitorAttendance->get()
            ->groupBy('visitor_id')
            ->filter(function ($group) {
                return $group->count() % 2 === 0;
            })
            ->count();;

        $overStayCount =  $VisitorAttendance->clone()

            ->whereHas(
                "visitor",
                function ($q) use ($date) {
                    $q->whereRaw("'$date' || ' ' || visitors.time_out < attendance_logs.LogTime");
                }
            )
            ->groupBy('visitor_id')->get()->count();


        $total = $ExpectingCount;
        $ExpectingCount = $total - $CheckedInCount;

        return [
            "ExpectingCount" => $ExpectingCount, "CheckedInCount" => $CheckedInCount, "CheckedOutCount" => $CheckedOutCount, "overStayCount" => $overStayCount,

            "Total" => $total
        ];
    }
}
