<?php

use App\Http\Controllers\Community\AccessControlController;
use App\Http\Controllers\Community\ReportController;
use Illuminate\Support\Facades\Route;


Route::get('community_report', [AccessControlController::class, 'index']);

Route::get('/community_report_print_pdf', [AccessControlController::class, 'ReportPrint']);
Route::get('/community_report_download_pdf', [AccessControlController::class, 'ReportDownload']);

Route::post('community_common_report', [ReportController::class, 'renderRequest']);

