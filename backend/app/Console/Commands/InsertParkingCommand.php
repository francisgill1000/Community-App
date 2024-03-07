<?php

namespace App\Console\Commands;

use App\Models\Community\Floor;
use App\Models\Community\Parking;
use Illuminate\Console\Command;

class InsertParkingCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'insert:parking';

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
        // Retrieve command arguments
        $category = $this->ask('Category', "Residence");
        $floorId = Floor::where("floor_number", $this->ask('Floor', "B5"))->value("id") ?? 0;
        $parkingNumberStart = $this->ask('Parking Number (Start)', 1);
        $parkingNumberEnd = $this->ask('Parking Number (End)', 1);

        $statusId = 1;

        $payload = [];

        $progressBar = $this->output->createProgressBar($parkingNumberEnd - $parkingNumberStart + 1);

        foreach (range($parkingNumberStart, $parkingNumberEnd) as $parkingNumber) {

            $payload[] = [
                'category' => $category,
                'floor_id' => $floorId,
                'parking_number' => sprintf("%02d", $parkingNumber),
                'status_id' => $statusId,
            ];

            // Advance the progress bar
            $progressBar->advance();
        }

        // Finish the progress bar
        $progressBar->finish();

        Parking::insert($payload);

        $this->info(PHP_EOL . 'Parking details inserted successfully.');
    }
}
