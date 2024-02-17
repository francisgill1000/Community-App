<?php

use App\Http\Controllers\Community\TanentController;
use Illuminate\Support\Facades\Route;

Route::apiResource('/tanent', TanentController::class);
Route::post('/tanent-register', [TanentController::class,"register"]);
Route::post('/add-member', [TanentController::class,"addMember"]);
Route::post('/update-member/{id}', [TanentController::class,"updateMember"]);
Route::get('/get_member_types', [TanentController::class,"getMemberTypes"]);
Route::delete('/delete-member/{id}', [TanentController::class,"deleteMember"]);

Route::get('/tanent-list', [TanentController::class,"dropDown"]);
Route::post('/tanent-update/{id}', [TanentController::class,"tanentUpdate"]);

Route::post('/tanent-validate', [TanentController::class,"validateTanent"]);
Route::post('/vehicle-validate', [TanentController::class,"validateVehicle"]);
Route::post('/vehicle-store', [TanentController::class,"storeVehicles"]);


Route::post('/store-multiple-vehicles/{id}', [TanentController::class,"storeMultipleVehicles"]);




Route::post('/tanent-update-validate/{id}', [TanentController::class,"validateUpdateTanent"]);



