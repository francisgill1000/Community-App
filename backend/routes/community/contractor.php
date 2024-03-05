<?php

use App\Http\Controllers\Community\ContractorController;
use Illuminate\Support\Facades\Route;

Route::apiResource('/contractor', ContractorController::class);
Route::post('/contractor/{id}', [ContractorController::class, "update"]);
Route::get('/contractor-list', [ContractorController::class, "dropdownList"]);
Route::post('/contractor-documents-store', [ContractorController::class, "contractorDocumentsStore"]);
Route::get('/contractor-documents-list/{id}', [ContractorController::class, "getDocumentsList"]);
Route::get('/download-contractor-documents/{id}/{file_name}', [ContractorController::class, 'downloadDocuments']);
Route::post('/contractor-documents-delete/{id}/{file_name}', [ContractorController::class, 'deleteDocument']);
