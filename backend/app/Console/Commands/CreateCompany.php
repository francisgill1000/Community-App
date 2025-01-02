<?php

namespace App\Console\Commands;

use App\Models\Company;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class CreateCompany extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:company';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        try {
            DB::beginTransaction();

            $company = [
                "name" => "Your Company Name",
                "member_from" => date('Y-m-d H:i:s'),
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
                "email" => "demo@gmail.com",
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

            $this->info('Company Successfully created.');
        } catch (\Exception $e) {
            DB::rollBack();
            $this->info('Company cannot create. ' . $e->getMessage());
        }
    }
}
