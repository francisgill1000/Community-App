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
            ->command('task:sync_attendance_logs')
            ->everyMinute()
            ->appendOutputTo(storage_path("logs/" . date("d-M-y") . "-attendance-logs.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));

        // $schedule
        //     ->command('task:update_company_ids')
        //     // ->everyThirtyMinutes()
        //     ->everyMinute()
        //     //->withoutOverlapping()
        //     ->appendOutputTo(storage_path("logs/$monthYear-logs.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));


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

        // $schedule
        //     ->command('task:db_backup')
        //     ->dailyAt('6:00')
        //     ->appendOutputTo(storage_path("logs/db_backup.log"))
        //     ->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));


        $schedule
            ->command('task:sync_alarm_logs')
            ->everyMinute()
            //->withoutOverlapping()
            ->appendOutputTo(storage_path("kernal_logs/alarm/" . date("d-M-y") . "-alarm-logs-laravel.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));




        // $companyIds = Company::pluck("id");

        // foreach ($companyIds as $companyId) {


        //->withoutOverlapping()

        // $schedule
        //     ->command("task:sync_auto_shift {$companyId} " . date("Y-m-d"))
        //     ->everyMinute()
        //     //->withoutOverlapping()
        //     ->appendOutputTo(storage_path("logs/shifts/auto/$monthYear-{$companyId}.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));


        // //if ($companyId == 1) 
        // {
        //     $schedule
        //         ->command("send_notificatin_for_offline_devices {$companyId}")
        //         //  ->dailyAt('09:00')
        //         ->everySixHours()
        //         // ->everyThirtyMinutes()
        //         // ->everyMinute()
        //         // ->runInBackground()
        //         ->withoutOverlapping()
        //         ->appendOutputTo(storage_path("logs/$monthYear-send-notification-for-offline-devices-{$companyId}.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));
        // }

        // $schedule
        //     ->command("task:sync_multi_shift_night {$companyId} " . date("Y-m-d", strtotime("yesterday")))
        //     ->hourly()
        //     ->between('00:00', '05:59')
        //     ->runInBackground()
        //     //->withoutOverlapping()
        //     ->appendOutputTo(storage_path("logs/shifts/multi_night/$monthYear-{$companyId}.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));

        // $schedule
        //     ->command("task:sync_multi_shift {$companyId} " . date("Y-m-d"))
        //     ->everyMinute()
        //     ->between('06:00', '23:59')
        //     ->runInBackground()
        //     //->withoutOverlapping()
        //     ->appendOutputTo(storage_path("logs/shifts/multi/$monthYear-{$companyId}.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));





        // $schedule
        //     ->command("task:sync_night_shift {$companyId} " . date("Y-m-d"))
        //     // ->hourly()
        //     ->everyMinute()
        //     ->runInBackground()
        //     //->withoutOverlapping()
        //     ->appendOutputTo(storage_path("logs/shifts/night/$monthYear-{$companyId}.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));


        // $schedule
        //     ->command("task:sync_single_shift {$companyId} " . date("Y-m-d"))
        //     // ->hourly()
        //     ->everyMinute()
        //     ->runInBackground()
        //     //->withoutOverlapping()
        //     ->appendOutputTo(storage_path("logs/shifts/single/$monthYear-{$companyId}.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));

        // $schedule
        //     ->command("task:sync_split_shift {$companyId} " . date("Y-m-d"))
        //     ->everyMinute()
        //     // ->dailyAt('09:00')
        //     ->runInBackground()
        //     //->withoutOverlapping()
        //     ->appendOutputTo(storage_path("logs/$monthYear-sync-split-logs-by-log-type-{$companyId}.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));


        // $schedule
        //     ->command("task:sync_visitor_attendance {$companyId} " . date("Y-m-d"))
        //     ->everyMinute()
        //     // ->dailyAt('09:00')
        //     ->runInBackground()
        //     ->appendOutputTo(storage_path("logs/$monthYear-sync-visitor-logs-by-log-type-{$companyId}.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));



        // $schedule
        //     ->command("default_attendance_seeder {$companyId}")
        //     ->monthlyOn(1, "00:00")
        //     ->runInBackground()
        //     //->withoutOverlapping()
        //     ->appendOutputTo(storage_path("logs/$monthYear-default-attendance-seeder-{$companyId}.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));

        //whatsapp reports 
        // $array = ['All', "P", "A", "M", "ME"];
        // foreach ($array as $status) {

        //     $schedule
        //         ->command("task:generate_daily_report {$companyId}  {$status}")
        //         // ->everyMinute()
        //         ->dailyAt('03:45')
        //         // ->runInBackground()
        //         ->withoutOverlapping()
        //         ->appendOutputTo(storage_path("logs/$monthYear-generate_daily_report-{$companyId}.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));

        //     $schedule
        //         ->command("task:generate_weekly_report {$companyId} {$status}")
        //         // ->everyMinute()
        //         ->dailyAt('04:00')
        //         // ->runInBackground()
        //         ->withoutOverlapping()
        //         ->appendOutputTo(storage_path("logs/$monthYear-generate_weekly_report-{$companyId}.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));

        //     $schedule
        //         ->command("task:generate_monthly_report {$companyId} {$status}")
        //         // ->everyMinute()
        //         ->monthlyOn(1, "04:30")
        //         // ->runInBackground()
        //         ->withoutOverlapping()
        //         ->appendOutputTo(storage_path("logs/$monthYear-generate_monthly_report-{$companyId}.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));
        // }

        // $schedule
        //     ->command("task:send_whatsapp_notification {$companyId}")
        //     // ->everyMinute()
        //     ->dailyAt('09:00')
        //     ->runInBackground()
        //     ->appendOutputTo(storage_path("logs/$monthYear-send-whatsapp-notification-{$companyId}.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));

        // $schedule
        //     ->command("task:sync_leaves $companyId")
        //     //->everyFiveMinutes()
        //     ->dailyAt('01:00')
        //     // ->runInBackground()
        //     ->withoutOverlapping()
        //     ->appendOutputTo(storage_path("logs/$monthYear-leaves-$companyId.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));

        // $schedule
        //     ->command("task:sync_holidays $companyId")
        //     //->everyTenMinutes()
        //     ->dailyAt('01:30')
        //     // ->runInBackground()
        //     ->withoutOverlapping()
        //     ->appendOutputTo(storage_path("logs/$monthYear-holidays-$companyId.log")); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));

        // $schedule
        //     ->command("task:sync_monthly_flexible_holidays --company_id=$companyId")
        //     // ->everyMinute()
        //     ->dailyAt('02:00')
        //     ->appendOutputTo(storage_path("logs/$monthYear-monthly-flexible-holidays-$companyId.log"))
        //     ->runInBackground(); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));


        // $schedule
        //     ->command("task:sync_off $companyId")
        //     // ->everyMinute()
        //     ->dailyAt('02:00')
        //     ->appendOutputTo(storage_path("logs/$monthYear-sync-off-by-day-$companyId.log"))
        //     ->runInBackground(); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));


        // $schedule
        //     ->command("task:sync_visitor_set_expire_dates $companyId")
        //     ->everyFiveMinutes()
        //     ->appendOutputTo(storage_path("logs/$monthYear-visitor-set-expire-date-$companyId.log"))
        //     ->runInBackground(); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));

        // $schedule
        //     ->command("task:sync_visitor_delete_expired_dates $companyId")

        //     ->dailyAt('08:00')
        //     ->appendOutputTo(storage_path("logs/$monthYear-visitor-delete-expired-dates-$companyId.log"))
        //     ->runInBackground(); //->emailOutputOnFailure(env("ADMIN_MAIL_RECEIVERS"));

        // }


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
