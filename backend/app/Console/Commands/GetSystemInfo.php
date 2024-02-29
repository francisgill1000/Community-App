<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class GetSystemInfo extends Command
{
    protected $signature = 'system:info';

    protected $description = 'Get system information including MAC address';

    public function handle()
    {
        $output = shell_exec('ipconfig /all'); // For Windows
        // $output = shell_exec('ifconfig'); // For Linux/Mac

        // Use regular expressions to find the line containing the MAC address
        preg_match('/Physical Address[\s\S]*?([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})/', $output, $matches);

        // Extract the MAC address from the matched line
        $macAddress = isset($matches[0]) ? $matches[0] : 'MAC address not found';

        // Output the MAC address
        $this->info(trim(explode(":", $macAddress)[1]));
    }
}
