<?php

use App\Http\Controllers\Community\ContractorController;
use Illuminate\Support\Facades\Route;

Route::apiResource('/contractor', ContractorController::class);
Route::post('/contractor/{id}', [ContractorController::class, "update"]);
Route::get('/contractor-list', [ContractorController::class, "dropdownList"]);