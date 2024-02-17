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
        Schema::table('company_branches', function (Blueprint $table) {
            $table->string("term")->default("Long Term");
            $table->string("email")->nullable();
            $table->string("phone_number")->nullable();
            $table->string("mobile_number")->nullable();
            $table->string("car_number")->nullable();
            $table->string("car_brand")->nullable();
            $table->string("car_issued_city")->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('company_branches', function (Blueprint $table) {
            $table->dropColumn("term");
            $table->dropColumn("email");
            $table->dropColumn("phone_number");
            $table->dropColumn("mobile_number");
            $table->dropColumn("car_number");
            $table->dropColumn("car_brand");
            $table->dropColumn("car_issued_city");
        });
    }
};
