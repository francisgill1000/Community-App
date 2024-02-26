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
        Schema::table('cards', function (Blueprint $table) {
            $table->string('name')->nullable();
            $table->string('system_number')->nullable();
            $table->date('issue_date')->nullable();
            $table->date('expire_date')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('cards', function (Blueprint $table) {
            $table->dropColumn('name');
            $table->dropColumn('system_number');
            $table->dropColumn('issue_date');
            $table->dropColumn('expire_date');
        });
    }
};
