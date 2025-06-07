<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UsersController;
use App\Http\Controllers\PostsController;
use App\Http\Controllers\CommentController;

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


Route::get('/users', [UsersController::class, 'index'])->name('users.index');
Route::get('/users/create', [UsersController::class, 'create'])->name('users.create');
Route::post('/users', [UsersController::class, 'store'])->name('users.store');

Route::get('/posts/trashed', [PostsController::class, 'trashed'])->name('posts.trashed');

Route::get('/posts', [PostsController::class, 'index'])->name('posts.index');
Route::get('/posts/create', [PostsController::class, 'create'])->name('posts.create');
Route::post('/posts/store', [PostsController::class, 'store'])->name('posts.store');
Route::get('/posts/{id}', [PostsController::class, 'show'])->name('posts.show');
Route::put('/posts/{id}', [PostsController::class, 'update'])->name('posts.update');  
Route::delete('/posts/{id}', [PostsController::class, 'destroy'])->name('posts.destroy');
Route::get('/posts/{id}/edit', [PostsController::class, 'edit'])->name('posts.edit');   
Route::post('/posts/{id}/restore', [PostsController::class, 'restore'])->name('posts.restore');


Route::post('/posts/{postId}/comments', [CommentController::class, 'store'])->name('comments.store');

require __DIR__.'/auth.php';
