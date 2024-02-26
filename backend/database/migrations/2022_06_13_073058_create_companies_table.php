<?php

use App\Models\User;
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
        Schema::create('companies', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class, 'user_id')->default(null)->nullable()->index();
            $table->string('name');
            $table->date('member_from');
            $table->date('expiry');
            $table->integer('max_employee');
            $table->integer('max_devices');
            $table->string('location')->nullable();
            $table->string('logo')->default(null)->nullable();
            $table->string('p_o_box_no')->nullable();
            $table->string('mol_id')->nullable();
            $table->json("modules")->nullable();
            $table->string("api_access_token")->nullable();
            $table->string("api_datetime")->nullable();
            $table->string('whatsapp_instance_id')->nullable();
            $table->string('whatsapp_access_token')->nullable();
            $table->string('company_code')->comment('AE0001');
            $table->boolean('no_branch')->default(0);
            $table->string('max_branches')->default(0);

            $table->string('lat')->nullable();
            $table->string('lon')->nullable();
            $table->string("management_company")->nullable();
            $table->string("account_type")->default("company");
            $table->boolean("status")->default(1);
            $table->timestamps();


            $table->foreign("user_id")->references("id")->on("users")->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('companies');
    }
};
