<?php

namespace App\Console\Commands;

use App\Models\Community\Floor;
use Illuminate\Console\Command;

class InsertFloorData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'insert:floors';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Insert data into the Floor model';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $data = [
            [
                "company_id" => 2, "floor_number" => "1st Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "2nd Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "3rd Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "4th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "5th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "6th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "7th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "8th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "9th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "10th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "11th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "12th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "13th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "14th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "15th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "16th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "17th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "18th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "19th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "20th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "21st Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "22nd Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "23rd Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "24th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "25th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "26th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "27th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "28th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "29th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "30th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "31st Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "32nd Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "33rd Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "34th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "35th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "36th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "37th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "38th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "39th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "40th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "41st Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "42nd Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "43rd Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "44th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "45th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "46th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "47th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "48th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "49th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "50th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "51st Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "52nd Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "53rd Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "54th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "55th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "56th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "57th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "58th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "59th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "60th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "61st Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "62nd Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "63rd Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "64th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "65th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "66th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "67th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "68th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "69th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "70th Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "71st Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "72nd Floor",
            ],
            [
                "company_id" => 2, "floor_number" => "73rd Floor",
            ]
        ];

        Floor::insert($data);

        return 0;

        //"company_id" => 2, "floor_number" => "required Floor",
        // "company_id" => "required"
    }
}
