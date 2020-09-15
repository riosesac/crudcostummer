<?php

use Illuminate\Support\Facades\Route;

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

// Route::get('/', function () {
//     return view('welcome');
// });

Route::view('/', 'app');
Route::view('/{path}', 'app');
Route::view('/user/create', 'app');
Route::view('/user/update/{id}', 'app');
Route::view('/user/show/{id}', 'app');
