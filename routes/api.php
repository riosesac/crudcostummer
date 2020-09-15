<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::match(['get', 'post'], '/user', 'Custommer\Akses\Akses@index');
Route::match(['get', 'post'], '/user/show/{id}', 'Custommer\Akses\Akses@show');
Route::match(['get', 'post'], '/user/create', 'Custommer\Akses\Akses@store');
Route::match(['put', 'post'], '/user/update/{id}', 'Custommer\Akses\Akses@update');
Route::match(['delete', 'post'], '/user/delete/{id}', 'Custommer\Akses\Akses@destroy');
