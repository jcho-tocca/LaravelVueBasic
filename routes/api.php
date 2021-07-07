
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/**
 * 管理画面
 */
Route::prefix('admin')->namespace('Admin')->name('admin.')->middleware('auth:sanctum')->group(function () {
    Route::get('/users', [App\Http\Controllers\Admin\UserController::class, 'index']);
    Route::post('/users', [App\Http\Controllers\Admin\UserController::class, 'store']);
    Route::get('/users/{user}', [App\Http\Controllers\Admin\UserController::class, 'show']);
    Route::put('/users/{user}', [App\Http\Controllers\Admin\UserController::class, 'update']);
    Route::delete('/users/{user}', [App\Http\Controllers\Admin\UserController::class, 'destroy']);
    Route::get('/users/{user}/download', [App\Http\Controllers\Admin\UserController::class, 'fileDownLoad']);
});


// /**
//  * ユーザ画面
//  */
// Route::middleware('auth:sanctum')->group(function () {

// });

// ログイン
Route::post('/login', [App\Http\Controllers\LoginController::class, 'login']);
// ログアウト
Route::post('/logout', [App\Http\Controllers\LoginController::class, 'logout']);
// ログインユーザー情報取得
Route::get('/user', [App\Http\Controllers\LoginController::class, 'user']);
