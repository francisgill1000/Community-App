<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Community\TanentTimezoneMappingController;

Route::apiResource('/tanent-timezone-mapping', TanentTimezoneMappingController::class);
