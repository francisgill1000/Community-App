<?php

namespace App\Console\Commands\AccessControl;

use App\Http\Controllers\Community\ReportController;
use App\Jobs\GenerateAccessControlReport;
use App\Models\AttendanceLog;
use App\Models\Community\CommunityReport;
use App\Models\Company;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class PDFReport extends Command
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

        $data = $query->get()->toArray();

        $company = Company::whereId($company_id)->first();

        $chunks = array_chunk($data, 10);

        $params = ["report_type" => "Date Wise Report"];

        foreach ($chunks as $index => $chunk) {

            $batchKey = $index + 1;

            GenerateAccessControlReport::dispatch($chunk, $company_id, $date, $params, $company, $batchKey, count($chunks));
        };
    }
}
