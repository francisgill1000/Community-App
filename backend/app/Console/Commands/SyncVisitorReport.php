<?php

namespace App\Console\Commands;

use App\Http\Controllers\Community\VisitorReportController;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class SyncVisitorReport extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sync_visitor_report {company_id} {date}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'sync_visitor_report';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $id = $this->argument("company_id");
        $date = $this->argument("date");


        try {
            echo (new VisitorReportController)->render($id, $date, [], false) . "\n";
        } catch (\Throwable $th) {
            //throw $th;
            $error_message = 'Cron: ' . env('APP_NAME') . ': Exception in sync_tanent_report  : Company Id :' . $id . ', : Date :' . $date . ', ' . $th;
            Log::channel("custom")->error($error_message);
            echo $error_message;
        }
    }
}
