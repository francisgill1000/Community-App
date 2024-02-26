<?php

use App\Http\Controllers\Community\CardController;
use Illuminate\Support\Facades\Route;

Route::apiResource('/card', CardController::class);


Route::get('/visitor-dropdown-list', [CardController::class,"visitorCardDropDown"]);
Route::get('/delivery-list', [CardController::class,"deliveryCardDropDown"]);
Route::get('/contractor-list', [CardController::class,"contractorCardDropDown"]);
