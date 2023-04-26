<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ShapeController;
use App\Http\Controllers\RingImportController;
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
Route::any('/test', function () {
    return view('test');
});
// Route::get('/test', [ShapeController::class, 'index'])->name('index');
Route::get('/', [ShapeController::class, 'index'])->name('index');
Route::post('/fetch_diamond', [ShapeController::class, 'fetch_diamond'])->name('fetched_diamond');
Route::get('/diamondDetails/{id}', [ShapeController::class, 'diamondDetails'])->name('diamondDetails');
Route::post('/selectdiamond', [ShapeController::class, 'selectdiamond'])->name('selectdiamond');

Route::get('/get_config_ring', [ShapeController::class, 'getconfigring'])->name('getconfigring');
Route::get('/choose_ring', [ShapeController::class, 'all_ring'])->name('all_ring');
Route::get('/ring_details/{id}', [ShapeController::class, 'ringdetails'])->name('ringdetails');
Route::post('/confirm_ring/', [ShapeController::class, 'confirm_ring'])->name('confirm_ring');

Route::get('/ring_diamond', [ShapeController::class, 'ring_diamond'])->name('ring_diamond');

Route::get('/remove_ring', [ShapeController::class, 'remove_ring'])->name('remove_ring');
Route::get('/remove_diamond', [ShapeController::class, 'remove_diamond'])->name('remove_diamond');
// overnightmounting
Route::get('ring-import', [RingImportController::class, 'excelFile']);
Route::post('ring-import-data', [RingImportController::class, 'fileImport'])->name('file-import');
// gh
Route::get('ring-import-excel', [RingImportController::class, 'getExcelFileImport']);
Route::post('ring-import-sheet-excel', [RingImportController::class, 'ExcelFileImport']);

Route::fallback(function () {
    return view('404');
});



