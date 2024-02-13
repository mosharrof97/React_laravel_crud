<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\crudController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/all',[crudController::class,'index']);
Route::post('/create',[crudController::class,'store']);
Route::get('/update/{id}',[crudController::class,'edit']);
Route::patch('/update/{id}',[crudController::class,'update']);
Route::delete('/delete/{id}',[crudController::class,'delete']);