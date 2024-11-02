<?php

namespace App\Console\Commands;

use App\Http\Controllers\Community\EmployeeReportController;
use App\Models\Employee;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class SyncEmployeeReport extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync_employee_report {company_id} {date} {custom}';

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
        $id = $this->argument("company_id");
        $startDate = new \DateTime($this->argument("date"));
        $endDate = new \DateTime($this->argument("date"));

        $custom = $this->argument("custom") !== 'false';

        $user_ids = [];

        if ($custom) {
            $user_ids = Employee::where("company_id", $id)->pluck("system_user_id")->toArray();
            $endDate = (clone $startDate)->modify('last day of this month');
        }

        // Define a 1-day interval
        $dateInterval = new \DateInterval('P1D'); // 1-day interval
        $datePeriod = new \DatePeriod($startDate, $dateInterval, $endDate->modify('+1 day'));

        foreach ($datePeriod as $date) {
            $formattedDate = $date->format('Y-m-d');
            echo $formattedDate . "\n";
            try {
                echo $result = (new EmployeeReportController)->render($id, $formattedDate, $user_ids, $custom) . "\n";
                // echo json_encode($result);
            } catch (\Throwable $th) {
                $error_message = 'Cron: ' . env('APP_NAME') . ': Exception in sync_employee_report  : Company Id :' . $id . ', : Date :' . $formattedDate . ', ' . $th;
                Log::channel("custom")->error($error_message);
                echo $error_message;
            }

            // sleep(5);
        }
    }
}
