<?php

namespace App\Http\Controllers;

use App\Models\LicenseKey;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LicenseKeyController extends Controller
{
    public function index()
    {
        return LicenseKey::value("activated");
    }

    public function activate()
    {
        return LicenseKey::where("token", request("license_key"))->update(["activated" => 1]);
    }

    public function store()
    {
        return LicenseKey::create([
            "token" => Hash::make("license_key")
        ]);
    }

    public function destroy()
    {
        LicenseKey::truncate();

        return 0;
    }
}
