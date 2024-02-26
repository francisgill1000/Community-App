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
        Schema::create('tanents', function (Blueprint $table) {
            $table->id();
            $table->string('full_name')->nullable();
            $table->string("first_name")->nullable();
            $table->string("last_name")->nullable();
            $table->string('phone_number')->nullable();
            $table->integer('floor_id')->default(0);
            $table->integer('room_id')->default(0);
            $table->string('start_date')->nullable();
            $table->string('end_date')->nullable();
            $table->string('profile_picture')->nullable();
            $table->string('attachment')->nullable();
            $table->integer('company_id')->default(0);
            $table->integer("room_category_id")->default(0);
            $table->integer("room_sub_category_id")->default(0);
            $table->string("system_user_id")->nullable();
            $table->string("email")->nullable();
           
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
        Schema::dropIfExists('tanents');
    }
};
