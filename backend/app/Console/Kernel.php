<?php

namespace App\Console;

use App\Models\AccessControlTimeSlot;
use App\Models\Company;
use App\Models\DeviceActivesettings;
use App\Models\ReportNotification;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Artisan;

class Kernel extends ConsoleKernel
{
    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $monthYear = date("M-Y");

        $companyId = 2;

        $schedule
            ->command("pdf:access-control-report-generate {$companyId} " . date("Y-m-d", strtotime("yesterday")))
            ->dailyAt("2:30")
            ->runInBackground();

        $schedule
            ->command('task:sync_attendance_logs')
            ->everyMinute()
            ->appendOutputTo(storage_path("logs/" . date("d-M-y") . "-attendance-logs.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));

        $schedule
            ->command("sync_tanent_report {$companyId} " . date("Y-m-d"))
            ->everyMinute()
            ->runInBackground();

        $schedule
            ->command("sync_visitor_report {$companyId} " . date("Y-m-d"))
            // ->hourly()
            ->everyMinute()
            ->runInBackground();

        $schedule
            ->command("sync_employee_report {$companyId} " . date("Y-m-d") . " " . false)
            // ->hourly()
            ->everyMinute()
            ->runInBackground();


        $schedule
            ->command('restart_sdk')
            ->dailyAt('4:00')
            //->hourly()
            ->appendOutputTo(storage_path("logs/restart_sdk.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));

        $schedule->call(function () {
            $count = Company::where("is_offline_device_notificaiton_sent", true)->update(["is_offline_device_notificaiton_sent" => false, "offline_notification_last_sent_at" => date('Y-m-d H:i:s')]);
            info($count . "companies has been updated");
        })->dailyAt('00:00');

        $schedule
            ->command('task:check_device_health')
            ->hourly()
            ->between('7:00', '23:59')
            // ->withoutOverlapping()
            ->appendOutputTo(storage_path("logs/$monthYear-devices-health.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));

        $schedule
            ->command('task:sync_alarm_logs')
            ->everyMinute()
            //->withoutOverlapping()
            ->appendOutputTo(storage_path("kernal_logs/alarm/" . date("d-M-y") . "-alarm-logs-laravel.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}
