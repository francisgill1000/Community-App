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
        Schema::create('community_reports', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id')->default(0);
            $table->string('user_type')->default("employee");
            $table->time('total_hrs')->default('00:00');
            $table->unsignedBigInteger('in_id')->default(0);
            $table->unsignedBigInteger('out_id')->default(0);
            $table->date('date')->default(now());
            $table->date('status')->default('in');
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
        Schema::dropIfExists('community_reports');
    }
};
