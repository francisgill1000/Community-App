<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;

class SetupController extends Controller
{
    public function index()
    {

        return env("DB_DATABASE") ? 1 : 0;
    }

    public function store()
    {
        // try {
        //     $path = base_path("database") . "\\database.sqlite";
        //     $contents = File::get(base_path('.env'));
        //     $updatedContents = preg_replace('/DB_DATABASE=(.*)/', 'DB_DATABASE=' . $path, $contents);
        //     File::put(base_path('.env'), $updatedContents);
        //     return $this->response("Database configuration updated successfully", null, true);
        // } catch (\Throwable $th) {
        //     $path = "";
        //     $contents = File::get(base_path('.env'));
        //     $updatedContents = preg_replace('/DB_DATABASE=(.*)/', 'DB_DATABASE=' . $path, $contents);
        //     File::put(base_path('.env'), $updatedContents);
        //     return $this->response($th, null, true);
        // }
    }

    public function generateSchema()
    {
        try {
            Artisan::call('migrate', ['--force' => true]);
            return $this->response("Schema has been generated", null, true);
        } catch (\Throwable $th) {
            return $this->response($th, null, true);
        }
    }


    public function create(Request $request)
    {
        try {
            DB::beginTransaction();

            $data = $request->all();

            $company = [
                "name" => "Your Company Name",
                "expiry" => date('Y-m-d H:i:s', strtotime(date("Y-m-d") . ' +3 months')),
                "company_code" => Company::max('id') + 1,
                "max_employee" => 10,
                "max_devices" => 10,
                "account_type" => "community",
            ];

            $company = Company::create($company);

            if (!$company) {
                DB::rollBack();
                return $this->response('Company cannot add.', null, false);
            }

            $user = [
                "name" => "ignore",
                "password" => Hash::make("password"),
                "email" => $data['email'],
                "is_master" => 1,
                "first_login" => 1,
                "user_type" => "company",
                "company_id" => $company->id,
            ];

            $user = User::create($user);

            if (!$user) {
                DB::rollBack();
                return $this->response('User cannot add.', null, false);
            }


            $company->user_id = $user->id;
            $company->save();
            DB::commit();

            return $this->response('Company Successfully created.', null, true);
        } catch (\Throwable $th) {
            DB::rollBack();
            return $this->response('Company cannot create.', null, true);
        }
    }
}
