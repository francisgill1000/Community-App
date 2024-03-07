<?php

use App\Http\Controllers\Community\ReportController;
use Illuminate\Support\Facades\Route;


Route::get('community_report', [ReportController::class, 'index']);
Route::get('community-report-print', [ReportController::class, 'print']);
Route::get('community-report-download', [ReportController::class, 'download']);

Route::get('community_common_report', [ReportController::class, 'index']);
Route::post('community_common_report', [ReportController::class, 'renderRequest']);


Route::post('community_common_report_bulk_store', [ReportController::class, 'bulkStore']);
