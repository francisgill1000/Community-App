<?php

namespace App\Console\Commands;

use App\Models\Company;
use App\Models\CompanyContact;
use App\Models\Role;
use App\Models\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class CreateCommunityAccount extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'register-community-account';

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
	echo json_encode(User::where("id",3)->update(["email" => "cayantower@myhome2cloud.com"]));
 	echo json_encode(User::where("id",6)->update(["email" => "cayantower11111@myhome2cloud.com"]));
	return;
        $company_name = $this->ask("Enter Company Name", "Your Company");
        $company_email = $this->ask("Enter Company Email", "community@myhome2cloud.com");
        $employeeCount = $this->ask("Enter total count of users", 0);
        $deviceCount = $this->ask("Enter total count of devices", 0);

        $password = "password";

        $user = [
            "name" => $company_name,
            "password" => Hash::make($password),
            "email" => $company_email,
            "is_master" => 1,
            "first_login" => 1,
            "user_type" => "company",
        ];

        $company = [
            "name" => $company_name,
            "member_from" => date("Y-m-d"),
            "expiry" => date("Y-m-d", strtotime(date("Y-m-d") . ' +1 year')),
            "company_code" => Company::max('id') + 1,
            "no_branch" => 0,
            "max_employee" => $employeeCount,
            "max_devices" => $deviceCount,
            "management_company" => "---",
            "account_type" => "community",
        ];



        $contact = [
            "name" => "Contact Person Name",
            "number" => "0000000000",
            "position" => "Manager",
            "whatsapp" => "0000000000",
        ];

        DB::beginTransaction();

        try {
            $role = Role::firstOrCreate(['name' => 'company']);

            if (!$role) {
                return $this->info('Role cannot add.');
            }

            $user["role_id"] = $role->id;

            if (!$user) {
                return $this->info('User cannot add.');
            }

            $company = Company::create($company);

            $user["company_id"] = $company->id;
            $user = User::create($user);

            $company->user_id = $user->id;
            $company->save();


            if (!$company) {
                return $this->info('Company cannot add.');
            }

            $contact['company_id'] = $company->id;

            $contact = CompanyContact::create($contact);

            if (!$contact) {
                return $this->info('Contact cannot add.');
            }

            DB::commit();

            $this->info('Your account has been created');

            $this->warn("Your Company Name: " . $company_name);
            $this->warn("Your Company Email: " . $company_email);
            $this->warn("Your Company Password: " . $password);
        } catch (\Throwable $th) {
            DB::rollBack();
            $this->error($th);
        }
    }
}
