<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class HelloContoller extends Controller
{
    public function hello()
    {
        $name ="ali ali";
        return view('hello',['name'=>$name]);
    }
}
