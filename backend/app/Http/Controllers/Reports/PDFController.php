<?php

namespace App\Http\Controllers\Reports;

use App\Http\Controllers\AccessControlController;
use App\Models\Company;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use App\Http\Controllers\Controller;
use App\Models\AttendanceLog;

class PDFController extends Controller
{

    public function daily_summary()
    {
        return Pdf::loadView('pdf.html.daily.daily_summary')->stream();
    }
    public function weekly_summary()
    {
        return Pdf::loadView('pdf.html.weekly.weekly_summary_v1')->stream();
    }
    public function monthly_summary()
    {
        return Pdf::loadView('pdf.html.monthly.monthly_summary_v1')->stream();
    }

    public function dailyAccessControl()
    {
        return Pdf::loadView('pdf.html.daily.access_control')->stream();
    }
    public function weeklyAccessControl()
    {
        return Pdf::loadView('pdf.html.weekly.access_control')->stream();
    }
    public function monthlyAccessControl()
    {
        return Pdf::loadView('pdf.html.monthly.access_control')->stream();
    }
    public function monthlyAccessControlV1()
    {
        return Pdf::loadView('pdf.html.monthly.access_control_v1')->stream();
    }
    public function monthlyAccessControlCount()
    {
        return Pdf::loadView('pdf.html.monthly.access_control_count')->stream();
    }
    public function monthlyAccessControlByDevice()
    {
        return Pdf::loadView('pdf.html.monthly.access_control_by_device')->stream();
    }

    public function testPDF()
    {
        $dataArray = [];

        // Populate the array with dummy data for demonstration purposes
        for ($i = 0; $i < 30; $i++) {
            $dataArray[] = [
                'id' => $i + 1,
                'name' => 'John Doe',
                'phone' => '123-456-7890',
                'code' => '101',
                'date' => '2024-01-25 08:00:00',
                'startTime' => '08:00 AM',
                'endTime' => '05:00 PM',
                'mode' => 'Entry',
                'status' => 'Present',
                'user_type' => 'Employee',
            ];
        }

        $chunks = array_chunk($dataArray, 20);
        return Pdf::setPaper('a4', 'landscape')->loadView('pdf.access_control_reports.report', ["chunks" => $chunks])->stream();
    }

    public function accessControlReportPrint(Request $request)
    {
        $data = (new AccessControlController)->processFilter()->get()->toArray();

        if ($request->debug) return $data;

        $chunks = array_chunk($data, 10);

        return Pdf::setPaper('a4', 'landscape')->loadView('pdf.access_control_reports.report', [
            "chunks" => $chunks,
            "company" => Company::whereId(request("company_id") ?? 0)->first(),
            "params" => $request->all(),

        ])->stream();
    }

    public function accessControlReportDownload(Request $request)
    {
        $data = (new AccessControlController)->processFilter()->get()->toArray();

        if ($request->debug) return $data;

        $chunks = array_chunk($data, 10);

        return Pdf::setPaper('a4', 'landscape')->loadView('pdf.access_control_reports.report', [
            "chunks" => $chunks,
            "company" => Company::whereId(request("company_id") ?? 0)->first(),
            "params" => $request->all(),

        ])->download();
    }
}
