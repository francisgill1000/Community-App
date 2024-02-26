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
        Schema::create('attendance_logs', function (Blueprint $table) {
            $table->id();
            $table->string('UserID');
            $table->string('LogTime');
            $table->string('DeviceID');
            $table->string('SerialNumber')->nullable();
            $table->datetime("checked_datetime")->nullable();
            $table->integer('company_id')->default(0);
            $table->integer('branch_id')->default(0);
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
        Schema::dropIfExists('attendance_logs');
    }
};
