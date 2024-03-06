<?php

use App\Http\Controllers\Community\ReportController;
use Illuminate\Support\Facades\Route;


Route::get('community_report', [ReportController::class, 'index']);
Route::get('community_report_print_pdf', [ReportController::class, 'print']);
Route::get('community_report_download_pdf', [ReportController::class, 'download']);

Route::get('community_common_report', [ReportController::class, 'index']);
Route::post('community_common_report', [ReportController::class, 'renderRequest']);



