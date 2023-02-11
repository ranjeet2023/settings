<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ShapeController;
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
// Route::any('/test', function () {
//     return view('test');
// });
Route::any('/test1', function () {
    return view('test1');
});
Route::get('/test', [ShapeController::class, 'index'])->name('index');
// Route::get('/', [ShapeController::class, 'index'])->name('index');

Route::post('/fetch_diamond', [ShapeController::class, 'fetch_diamond'])->name('fetched_diamond');
Route::get('/diamondDetails/{id}', [ShapeController::class, 'diamondDetails'])->name('diamondDetails');
Route::post('/selectdiamond', [ShapeController::class, 'selectdiamond'])->name('selectdiamond');


Route::get('/choose_ring', [ShapeController::class, 'select_ring'])->name('choose_ring');
Route::post('/confirm_ring', [ShapeController::class, 'confirm_ring'])->name('confirm_ring');
Route::get('/confirm_ring', [ShapeController::class, 'ring_view']);

Route::get('/ring_diamond', [ShapeController::class, 'ring_diamond'])->name('ring_diamond');

Route::get('/remove_ring', [ShapeController::class, 'remove_ring'])->name('remove_ring');
Route::get('/remove_diamond', [ShapeController::class, 'remove_diamond'])->name('remove_diamond');
Route::fallback(function () {
    return view('404');
});
