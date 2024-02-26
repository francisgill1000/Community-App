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
        Schema::create('visitors', function (Blueprint $table) {
            $table->id();

            $table->string('logo')->nullable();
            $table->unsignedBigInteger('timezone_id')->nullable();

            $table->string('visit_from')->nullable();
            $table->string('visit_to')->nullable();
            $table->unsignedBigInteger('purpose_id')->nullable();

            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('gender')->nullable();

            $table->string('phone_number')->nullable();
            $table->string('email')->nullable();
            $table->string('visitor_company_name')->nullable();

            $table->unsignedBigInteger('id_type')->nullable();
            $table->string('id_number')->nullable();
            $table->string('id_copy')->nullable();


            $table->string('host_first_name')->nullable();
            $table->string('host_last_name')->nullable();
            $table->string('host_gender')->nullable();

            $table->string('host_phone_number')->nullable();
            $table->string('host_email')->nullable();
            $table->unsignedBigInteger('host_company_id')->nullable();

            $table->unsignedBigInteger('status_id')->nullable();
            $table->string('date')->nullable();

            $table->unsignedBigInteger('updated_by')->nullable();
            $table->string('status_phone_number')->nullable();
            $table->string('company_name')->nullable();

            $table->string('reason')->nullable();

            $table->string("host_flat_number")->nullable();
            $table->string("host_company_name")->nullable();
            $table->string("host_name")->nullable();

            $table->string('visitor_filled_datetime')->nullable();
            $table->string('host_changed_status_datetime')->nullable();
            $table->string('guard_changed_status_datetime')->nullable();
            $table->string('checked_in_datetime')->nullable();
            $table->string('checked_out_datetime')->nullable();

            $table->string("time_in")->nullable();
            $table->string("time_out")->nullable();

            $table->string('company_id')->nullable();

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
        Schema::dropIfExists('visitors');
    }
};
