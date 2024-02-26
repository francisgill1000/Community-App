<?php

use App\Models\Company;
use App\Models\DeviceStatus;
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
        Schema::create('devices', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Company::class, 'company_id')->default(0);
            $table->foreignIdFor(Company::class, 'branch_id')->default(0);
            $table->foreignIdFor(DeviceStatus::class, 'status_id');
            $table->string('name');
            $table->string('short_name')->nullable();
            $table->string('device_id');
            $table->string('location')->nullable();
            $table->integer("alarm_status")->default(0);
            $table->dateTime("alarm_start_datetime")->nullable();
            $table->dateTime("alarm_end_datetime")->nullable();
            $table->timestamps();

            $table->string("function")->nullable();
            $table->string("serial_number")->nullable();
            $table->string("utc_time_zone")->nullable();

            $table->string('ip');
            $table->string('port');

            $table->string('model_number')->nullable();
            $table->enum('device_type', ['in', 'out', 'auto']);


            $table->foreign("company_id")->references("id")->on("companies")->cascadeOnDelete();
            $table->foreign("status_id")->references("id")->on("device_statuses");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('devices');
    }
};
