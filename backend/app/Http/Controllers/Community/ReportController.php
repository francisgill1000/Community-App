<?php

namespace App\Http\Controllers\Community;

use Illuminate\Http\Request;
use App\Models\AttendanceLog;
use App\Http\Controllers\Controller;
use App\Jobs\GenerateAccessControlReport;
use App\Models\Community\CommunityReport;
use App\Models\Company;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class ReportController extends Controller
{
    public function index()
    {
        return $this->processFilter()->paginate(request("per_page", 10));
    }
    public function processPDFForSingle($action)
    {
        $company_id = request("company_id", 0);

        $date       = date("Y-m-d");

        $data = $this->processFilter()->get()->toArray();

        $company = Company::whereId($company_id)->first();

        $chunks = array_chunk($data, 10);

        $report_type = "Access Control Report";

        // Initialize the PDF merger object outside the loop
        $pdfMerger = new \setasign\Fpdi\Fpdi();

        $filesPath = public_path("access_control_reports/companies/$company_id/runtime");

        if (!file_exists($filesPath)) {
            mkdir($filesPath, 0777, true);
        }

        // Process and merge the PDFs directly in memory
        $generatedPdfs = array_map(function ($chunk, $index) use ($chunks, $company, $report_type, $date, $filesPath) {
            $batchKey = $index + 1;

            $payload = [
                "chunk" => $chunk,
                "company" => $company,
                "report_type" => $report_type,
                "currentPage" => $batchKey,
                "totalPages" => count($chunks),
                "date" => $date
            ];

            $output = Pdf::loadView('pdf.access_control_reports.report', $payload)->output();

            // Store PDF in memory, avoiding file system operations
            $tempFile = tempnam(sys_get_temp_dir(), 'pdf');
            file_put_contents($tempFile, $output);
            return $tempFile;
        }, $chunks, array_keys($chunks));

        // Merge PDFs from memory
        foreach ($generatedPdfs as $pdfFile) {
            $pdfMerger->addPage('L');
            $pdfMerger->setSourceFile($pdfFile);
            $template = $pdfMerger->importPage(1);
            $pdfMerger->useTemplate($template);

            // Clean up the temporary file after merging
            unlink($pdfFile);
        }

        return response($pdfMerger->Output('Access_Control_Report.pdf', $action))
            ->header('Content-Type', 'application/pdf');
    }

    public function print()
    {
        if (request("UserID")) {
            return $this->processPDFForSingle("I");
        }


        $company_id = request("company_id", 0);
        $from_date = request("from_date", date("Y-m-d"));
        $to_date = request("to_date", date("Y-m-d"));
        return $this->PDFMerge("I", $company_id, $from_date, $to_date);
    }
    public function download()
    {
        if (request("UserID")) {
            return $this->processPDFForSingle("D");
        }

        $company_id = request("company_id", 0);
        $from_date = request("from_date", date("Y-m-d"));
        $to_date = request("to_date", date("Y-m-d"));
        return $this->PDFMerge("D", $company_id, $from_date, $to_date);
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
                ->distinct("UserID", "company_id")
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

            $userDetails = $this->getUserDetails($key);

            $userKey = array_key_first($userDetails);
            $item = [];
            if (isset($userDetails[$userKey]["id"])) {
                $item = [
                    "user_id" =>   $userDetails[$userKey]["id"],
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

        return ($message);
    }

    public function processFilter()
    {
        $user_type = request("user_type");

        $query = CommunityReport::query();

        if ($user_type) {
            // Convert 'Employee' to lowercase for consistency
            if (strtolower($user_type) === 'employee') {
                $user_type = strtolower($user_type);
            }

            $query->where("user_type", $user_type);
        }

        $query->when(request()->filled("UserID"), function ($q) {
            $q->where('user_id', request("UserID"));
        });

        $query->when(request()->filled("DeviceID"), function ($query) {
            $query->whereHas("logs", function ($q) {
                $q->where('DeviceID', request("DeviceID"));
            });
        });

        $query->whereHas("logs", function ($q) {
            $q->where("LogTime", ">=", request("from_date"));
            $q->where("LogTime", "<=", request("to_date"));
        });

        // $query->with("logs");


        if (in_array(request("user_type"), ['Primary', 'Owner', 'Family Member', 'Maid'])) {
            $query->with([
                "in_log",
                "out_log",
                "tanent",
                "family_member",
                "owner",
                "maid",
            ]);
        } else if (in_array(request("user_type"), ['visitor', 'delivery', 'contractor'])) {
            $query->with([
                "in_log",
                "out_log",
                "visitor.purpose",
                "delivery.purpose",
                "contractor.purpose",
            ]);
        } else {

            $query->with([
                "in_log",
                "out_log",
                'employee:id,first_name,last_name,phone_number,profile_picture,employee_id,branch_id,system_user_id,display_name,department_id'
            ]);
        }

        return $query;
    }

    public function PDFMerge($action = "I", $company_id, $from_date, $to_date)
    {
        $filesDirectory = public_path("access_control_reports/companies/$company_id");

        // Check if the directory exists
        if (!is_dir($filesDirectory)) {
            return response()->json(['error' => 'Directory not found'], 404);
        }

        // $pdfFiles = glob($filesDirectory . '/*.pdf');
        $pdfFiles = [];

        // Convert start and end dates to DateTime objects
        $startDate = new \DateTime($from_date);
        $endDate = new \DateTime($to_date);

        while ($startDate <= $endDate) {

            $date = $startDate->format("Y-m-d");

            if (glob($filesDirectory . "/$date.pdf")) {
                $pdfFiles[] = glob($filesDirectory . "/$date.pdf")[0];
            }

            $startDate->modify('+1 day');
        }


        if (empty($pdfFiles)) {
            return 'No PDF files found';
        }

        if ($action == "I") {
            return (new Controller)->mergePdfFiles($pdfFiles, $action, "Access-Control-Report.pdf");
        }

        return (new Controller)->mergePdfFiles($pdfFiles, $action, "Access-Control-Report.pdf");
    }
}
