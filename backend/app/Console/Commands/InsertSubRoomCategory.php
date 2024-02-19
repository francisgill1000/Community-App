<?php

namespace App\Console\Commands;

use App\Models\Community\RoomSubCategory;
use Illuminate\Console\Command;

class InsertSubRoomCategory extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */

    // Example => php artisan insert:sub_room_categories 7001 7002
    protected $signature = 'insert:sub_room_categories {start_number} {end_number}';

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
        $start = $this->argument("start_number");

        $end = $this->argument("end_number");

        $data = [];
      
        foreach (range($start, $end) as $value) {
            $data[] = [
                'name' => $value,
                'room_category_id' => 7,
                'company_id' => 2,
            ];
        }

        RoomSubCategory::insert($data);
        return 0;
    }
}
