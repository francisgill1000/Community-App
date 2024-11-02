<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

use App\Http\Controllers\Community\ReportController;
use Illuminate\Support\Facades\Log;

class RenderTenantReport extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'render-tenant-report';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'render-tenant-report';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $UserId = $this->ask("user_id", 0);
        $date = $this->ask("date", date("Y-m-d"));


        try {
            echo (new ReportController)->render(2, $date, [$UserId], true) . "\n";
        } catch (\Exception $th) {
            //throw $th;
            $error_message = 'Cron: ' . env('APP_NAME') . ': Exception in sync_tanent_report  : Company Id :' . $id . ', : Date :' . $date . ', ' . $th;
            Log::channel("custom")->error($error_message);
            echo $error_message;
        }
    }
}
