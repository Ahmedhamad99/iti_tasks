<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function users(){

        $users =User::all();
        return view("users.index",compact("users"));
        // $name = "ahmad";
        // dd(compact("name"));
    }
}
