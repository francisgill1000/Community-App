<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tanent_devices', function (Blueprint $table) {
            $table->id();
            $table->string('UserID');
            $table->string('DeviceID');
            $table->boolean('face')->default(false);
            $table->boolean('rfid')->default(false);
            $table->json('sdk_response')->nullable();
            $table->datetime("datetime")->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tanent_devices');
    }
};
