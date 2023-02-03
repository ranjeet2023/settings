<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ShapeController;
use App\Http\Controllers\ChooseStoneController;

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

// Route::any('/', function () {
//     return view('test');
// });
// route::get('/',[ShapeController::class,'index']);
// route::any('/test',[ShapeController::class,'test']);
// route::get('/data',[ShapeController::class,'fetch_record']);
// Route::get('/', [ShapeController::class, 'index1']);
// Route::get('/users', [ShapeController::class, 'getUsers'])->name('users');

Route::get('/select/{id}', [ChooseStoneController::class, 'Select_stone'])->name('select');
Route::get('/choose-setting/{id}', [ChooseStoneController::class, 'Select_stone'])->name('settings');

