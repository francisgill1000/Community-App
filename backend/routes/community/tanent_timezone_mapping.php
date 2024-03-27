<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Community\TanentTimezoneMappingController;

Route::apiResource('/tanent-timezone-mapping', TanentTimezoneMappingController::class);
Route::get('/upload-tanent-mapping-to-device', [TanentTimezoneMappingController::class, "uploadTanentMappingToDevice"]);
