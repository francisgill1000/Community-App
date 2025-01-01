<?php

namespace App\Console\Commands\AccessControl;

use App\Http\Controllers\Community\ReportController;
use App\Jobs\GenerateAccessControlReport;
use App\Models\Company;
use App\Models\Device;
use Illuminate\Console\Command;

class PDFReportByCombinations extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'pdf:access-control-report-generate {company_id} {date}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $company_id = $this->argument("company_id", 0);

        $date = $this->argument("date", date("Y-m-d"));

        $query = (new ReportController)->processFilter();

        $query->whereDate('date', $date);

        // $query->where('user_type', "employee");

        $data = $query->get()->toArray();


        $accessControlReports = [
            "Date Wise Access Control Report",
            "Door Wise Access Control Report",
            "Access Granted Access Control Report",
            "Access Denied Access Control Report",
        ];

        $user_types = [
            "employee",
            "Tanent",
            "Family Member",
            "Owner",
            "Visitor",
            "Delivery",
            "Contractor",
            "Maid",
        ];

        $devices = Device::where("company_id", 2)->pluck("id")->toArray();

        foreach ($accessControlReports as $accessControlReport) {
            foreach ($user_types as $user_type) {
                foreach ($devices as $d) {
                    // $user_type = $row["user_type"];
                    // $device = $row["in_log"]["device"]["id"];
                    // $UserID = $row["in_log"]["UserID"];

                    // $user_types[$user_type][] = $row;
                    // $user_types[$device][] = $row;
                    // $user_types[$device][] = $row;

                    $filesPath = public_path("access_control_reports/companies/$company_id/$date/$accessControlReport/$user_type/$d");


                    if (!file_exists($filesPath)) {
                        mkdir($filesPath, 0777, true);
                    }

                    info($filesPath);
                }
            }

            // info($devices);
            // info($user_types);
        }
        die;


        $data = $query->get()->toArray();

        // echo count($data);die;

        $company = Company::whereId($company_id)->first();

        $chunks = array_chunk($data, 10);

        $params = ["report_type" => "Date Wise Report"];

        foreach ($chunks as $index => $chunk) {

            $batchKey = $index + 1;

            GenerateAccessControlReport::dispatch($chunk, $company_id, $date, $params, $company, $batchKey, count($chunks));
        };
    }
}
