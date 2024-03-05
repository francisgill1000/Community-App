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
        Schema::create('tenants_documents', function (Blueprint $table) {
            $table->id();
            $table->string("title");
            $table->string("attachment");
            $table->integer("tenant_id");
            $table->dateTime("date_time");

            $table->integer("company_id")->default(0);
            $table->integer("branch_id")->default(0);
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
        Schema::dropIfExists('tenants_documents');
    }
};
