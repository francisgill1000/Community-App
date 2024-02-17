<?php

use App\Http\Controllers\Community\ParkingAllocationController;
use App\Http\Controllers\Community\ParkingController;
use Illuminate\Support\Facades\Route;

Route::apiResource('parking', ParkingController::class);

Route::get('parking-list', [ParkingController::class, "dropDown"]);
Route::get('parking-floor-by-category/{category}', [ParkingController::class, "floorByCategory"]);
Route::get('parkings-by-floor/{id}', [ParkingController::class, "parkingsByFloor"]);
Route::apiResource('parking-allocation', ParkingAllocationController::class);
