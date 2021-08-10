<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TaxiController;
use App\Http\Controllers\LocationController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get("/", [TaxiController::class, "index"])->name("getTaxi");
Route::get("/create-taxi", [TaxiController::class, "create"])->name("createTaxi");
Route::get("/edit-taxi/{taxi}", [TaxiController::class, "edit"])->name("editTaxi");
Route::get("/update-taxi/{taxi}", [TaxiController::class, "update"])->name("updateTaxi");
Route::get("/refuel-taxi/{taxi}", [TaxiController::class, "refuel"])->name("refuelTaxi");
Route::get("/delete-taxi/{taxi}", [TaxiController::class, "delete"])->name("deleteTaxi");

Route::get("/map", [LocationController::class, "index"])->name("getMap");
Route::get("/create-location", [LocationController::class, "create"])->name("createLocation");
Route::get("/edit-location/{location}", [LocationController::class, "edit"])->name("editLocation");
Route::get("/update-location/{location}", [LocationController::class, "update"])->name("updateLocation");
Route::get("/delete-location/{location}", [LocationController::class, "delete"])->name("deleteLocation");