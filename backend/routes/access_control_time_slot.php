<?php

use App\Http\Controllers\AccessControlTimeSlotController;
use App\Http\Controllers\AlarmLogsController;
use Illuminate\Support\Facades\Route;

Route::apiResource('/access-control-time-slot', AccessControlTimeSlotController::class);

Route::get('/loadalarm_csv', function (Request $request) {

    return (new AlarmLogsController)->store();
});
