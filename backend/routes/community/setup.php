<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Community\SetupController;

Route::apiResource('/setup', SetupController::class);
Route::post('/generate-schema', [SetupController::class,"generateSchema"]);
