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
        Schema::table('tanents', function (Blueprint $table) {
            $table->boolean("deactivateToggle")->default(false);
            $table->boolean("removeFaceToggle")->default(false);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('tanents', function (Blueprint $table) {
            $table->dropColumn("deactivateToggle");
            $table->dropColumn("removeFaceToggle");
        });
    }
};
