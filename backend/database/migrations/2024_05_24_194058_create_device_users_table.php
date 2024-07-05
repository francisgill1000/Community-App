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
        Schema::create('device_users', function (Blueprint $table) {
            $table->id();
            $table->string("name")->nullable();
            $table->string("userCode")->nullable();
            $table->string("code")->nullable();
            $table->string("cardData")->nullable();
            $table->string("password")->nullable();
            $table->string("job")->nullable();
            $table->string("dept")->nullable();
            $table->string("identity")->default(0);
            $table->string("cardStatus")->default(0);
            $table->string("cardType")->default(0);
            $table->string("enterStatus")->default(0);
            $table->string("expiry")->nullable();
            $table->unsignedBigInteger("openTimes")->default(0);
            $table->unsignedBigInteger("timeGroup")->default(1);
            $table->string("faceImage")->nullable();
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
        Schema::dropIfExists('device_users');
    }
};
