<?php

namespace App\Console\Commands;

use App\Models\Community\Tanent;
use Illuminate\Console\Command;

class ZombieDelete extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'zombie:delete';

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
        // use this file in you need to delete record form the command.
        return 0;
    }
}
