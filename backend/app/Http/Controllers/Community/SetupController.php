<?php

namespace App\Http\Controllers\Community;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\File;

class SetupController extends Controller
{
    public function index()
    {

        return env("DB_DATABASE") ? 1 : 0;
    }

    public function store(Request $request)
    {
        try {
            $path = $request->path . "\\database.sqlite";
            $contents = File::get(base_path('.env'));
            $updatedContents = preg_replace('/DB_DATABASE=(.*)/', 'DB_DATABASE=' . $path, $contents);
            File::put(base_path('.env'), $updatedContents);
            // return  Artisan::call('migrate', ['--force' => true]);
            return $this->response("Database configuration updated successfully", null, true);
        } catch (\Throwable $th) {
            $path = "";
            $contents = File::get(base_path('.env'));
            $updatedContents = preg_replace('/DB_DATABASE=(.*)/', 'DB_DATABASE=' . $path, $contents);
            File::put(base_path('.env'), $updatedContents);
            return $this->response($th, null, true);
        }
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
}
