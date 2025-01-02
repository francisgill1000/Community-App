<?php

namespace App\Console\Commands\AccessControl;

use Illuminate\Console\Command;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class GenerateMonthlyAccessControlReport extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'pdf:access-control-report-generate-monthly {company_id} {year} {month}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate access control report for a full month for a specific company';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $companyId = $this->argument('company_id');
        $year = $this->argument('year');
        $month = $this->argument('month');

        // Validate the inputs
        if (!checkdate($month, 1, $year)) {
            $this->error('Invalid year or month provided.');
            return;
        }

        // Generate dates for the full month
        $startDate = Carbon::createFromDate($year, $month, 1);
        $endDate = $startDate->copy()->endOfMonth();

        // Loop through each day of the month
        $currentDate = $startDate;
        while ($currentDate <= $endDate) {
            $this->info("Generating report for company ID {$companyId} on: " . $currentDate->toDateString());

            // Call the existing daily report command
            $this->call('pdf:access-control-report-generate', [
                'company_id' => $companyId,
                'date' => $currentDate->toDateString(),
            ]);

            $currentDate->addDay();
        }

        $this->info("Monthly report generation completed for company ID {$companyId} in {$startDate->format('F Y')}.");
    }
}
