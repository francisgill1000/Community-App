<?php

use App\Http\Controllers\Community\TanentController;
use Illuminate\Support\Facades\Route;

Route::apiResource('/tanent', TanentController::class);
Route::get('/sync-tanents', [TanentController::class, "syncTanents"]);

Route::get('/tanent-records-csv', [TanentController::class, "recordsCsv"]);


Route::post('/tanent-register', [TanentController::class, "register"]);
Route::post('/add-member', [TanentController::class, "addMember"]);
Route::post('/update-member/{id}', [TanentController::class, "updateMember"]);
Route::get('/get_member_types', [TanentController::class, "getMemberTypes"]);
Route::get('/maids', [TanentController::class, "getMaids"]);
Route::get('/get-single-maid/{id}', [TanentController::class, "getSingleMaid"]);


Route::delete('/delete-member/{id}', [TanentController::class, "deleteMember"]);

Route::get('/tanent-list', [TanentController::class, "dropDown"]);
Route::post('/tanent-update/{id}', [TanentController::class, "tanentUpdate"]);

Route::post('/tanent-validate', [TanentController::class, "validateTanent"]);
Route::post('/vehicle-validate', [TanentController::class, "validateVehicle"]);
Route::post('/vehicle-store', [TanentController::class, "storeVehicles"]);

Route::post('/store-multiple-vehicles/{id}', [TanentController::class, "storeMultipleVehicles"]);
Route::post('/tanent-update-validate/{id}', [TanentController::class, "validateUpdateTanent"]);




Route::post('/assign-tanents/{id}', [TanentController::class, "assignTanentstoMaid"]);
Route::get('/get-associated-tanent-ids/{id}', [TanentController::class, "getAssociatedTanentIds"]);


Route::post('/tenant-documents-store', [TanentController::class, "TenantsDocumentsStore"]);
Route::get('/tenant-documents-list/{id}', [TanentController::class, "getDocumentsList"]);
Route::get('/download-tenant-documents/{id}/{file_name}', [TanentController::class, 'downloadDocuments']);
Route::post('/tenant-documents-delete/{id}/{tenant_id}/{file_name}', [TanentController::class, 'deleteDocument']);
Route::post('/tenant-documents-update', [TanentController::class, 'tenantsDocumentsUpdate']);
