<?php

use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

Route::apiResource('/community-admin', AdminController::class);
