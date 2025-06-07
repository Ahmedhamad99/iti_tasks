<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\backend\HelloContoller;
use App\Http\Controllers\backend\ProductController;
use App\Http\Controllers\backend\UserController;
use App\Http\Controllers\DashbaordController;
Route::get('/', function () {
    return view('welcome');
});


Route::group(["prefix"=>"admin"],function(){
    Route::get('hello', [HelloContoller::class,"hello"])->name("testhello");
    Route::get("users",[UserController::class,"users"])->name("users"); 
});

Route::group(["prefix"=>"dashboard","middleware"=>["verified"]],function(){
    Route::get("/",[DashbaordController::class,"index"])->name("dashboard");
    
    Route::group(["prefix"=>"users" ,"as"=>"users."],function(){
        Route::get("/",[UserController::class,"index"])->name("users");
        Route::get("create",[UserController::class,"create"])->name("create");

    });
    Route::group(["prefix"=>"products" ,"as"=>"products."],function(){
        Route::get("/",[ProductController::class,"index"])->name("index");
        Route::get("create",[ProductController::class,"create"])->name("create");
        Route::get("edit/{id}",[ProductController::class,"edit"])->name("edit");
        Route::put("update/{id}",[ProductController::class,"update"])->name("update");
        Route::post("store",[ProductController::class,"store"])->name("store");
        Route::delete("destroy/{id}",[ProductController::class,"destroy"])->name("destroy");

    });
});



Auth::routes(['verify' => true]);

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');


