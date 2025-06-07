<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\PostsController;
use App\Http\Controllers\Api\UsersController;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

use Illuminate\Validation\ValidationException;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// users route
Route::get("/users",[UsersController::class,'index'])->middleware('auth:sanctum');
Route::post("/users",[UsersController::class,'store'])->middleware('auth:sanctum');
Route::get("/users/{id}",[UsersController::class,'show'])->middleware('auth:sanctum');
Route::put("/users/{id}",[UsersController::class,'update'])->middleware('auth:sanctum');
Route::delete("/users/{id}",[UsersController::class,'destroy'])->middleware('auth:sanctum');



// posts route
Route::get("/posts",[PostsController::class,'index'])->middleware('auth:sanctum');
Route::post("/posts",[PostsController::class,'store'])->middleware('auth:sanctum');
Route::get("/posts/{id}",[PostsController::class,'show'])->middleware('auth:sanctum');
Route::put("/posts/{id}",[PostsController::class,'update'])->middleware('auth:sanctum');
Route::delete("/posts/{id}",[PostsController::class,'destroy'])->middleware('auth:sanctum');










Route::post('/sanctum/token', function (Request $request) {

    $request->validate([

        'email' => 'required|email',

        'password' => 'required',

        'device_name' => 'required',

    ]);

 

    $user = User::where('email', $request->email)->first();

 

    if (! $user || ! Hash::check($request->password, $user->password)) {

        throw ValidationException::withMessages([

            'email' => ['The provided credentials are incorrect.'],

        ]);

    }
     return response()->json([
         'token' => $user->createToken($request->device_name)->plainTextToken
     ]);

});