<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ShapeController;
use App\Http\Controllers\ChooseStoneController;
use App\Http\Controllers\SelectRingController;
use Illuminate\Support\Facades\Session;
use Symfony\Component\CssSelector\Node\SelectorNode;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
route::get('/', [ShapeController::class, 'index'])->name('index');
Route::post('/fetch_data', [ShapeController::class, 'fetch_diamond'])->name('fetched_data');
Route::get('/select/{id}', [ChooseStoneController::class, 'Select'])->name('select');
Route::get('/choose-ring/{id}', [SelectRingController::class, 'All_Setting'])->name('confirm');
Route::get('/settings/', [SelectRingController::class, 'All_Setting'])->name('settings');
Route::get('/confirm-setting/{product_id}', [SelectRingController::class, 'Select_setting'])->name('Ring-settings');
Route::get('/confirm-setting', [SelectRingController::class, 'ring_view'])->name('confirm-setting');
Route::get('/preview', [SelectRingController::class, 'Settings'])->name('Select_setting');
Route::get('/ring/destroy', [SelectRingController::class, 'destroy_ring'])->name('destroy_ring');
Route::get('/diamond/destroy', [SelectRingController::class, 'destroy_diamond'])->name('destroy_diamond');


