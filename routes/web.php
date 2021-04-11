<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any?}', function() {
    return view('top');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
