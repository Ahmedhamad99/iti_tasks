<?php
use App\Http\Controllers\Apis\ProductController;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Apis\Auth\RegisterController;
use App\Http\Controllers\Apis\Auth\EmailVerficationController;
use App\Http\Controllers\Apis\Auth\LoginController;
Route::middleware("auth:sanctum")->get("/user",function (Request $request) {
    return $request->user();
});

Route::group(["prefix" => "products",'middleware'=>'auth:sanctum'],function(){
    Route::get("/",[ProductController::class,"index"]);
    Route::get("/create",[ProductController::class,"create"]);
    Route::get("/edit/{id}",[ProductController::class,"edit"]);
    Route::post("/store",[ProductController::class,"store"]);
    Route::post("/update/{id}",[ProductController::class,"update"]);
    Route::post("/destroy/{id}",[ProductController::class,"destroy"]);
});

Route::group(["prefix"=>"users"],function(){
      Route::post("register",RegisterController::class);
     
      Route::delete("logout",[ LoginController::class,"logout"]);
      Route::delete("logout-all-devices",[ LoginController::class,"logoutAllDevices"]);
      Route::post("login",[ LoginController::class,"login"]);
      Route::group(['middleware'=>'auth:sanctum'],function(){
        Route::post("send-code",[EmailVerficationController::class,"sendCode"]);
        Route::post("check-code",[EmailVerficationController::class,"checkCode"]);
      });
    
    });


