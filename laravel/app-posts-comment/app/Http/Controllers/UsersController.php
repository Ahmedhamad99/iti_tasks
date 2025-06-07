<?php

namespace App\Http\Controllers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UsersController extends Controller
{
    public function index(){
        $users = User::all();
        return view('users.index',['users' =>$users]);
    }
    public function store(Request $request){
        // dd($request->all());
        $user = User::create($request->all());
        $user->save();
        return redirect()->route('users.index');
    }
    public function create(){
        return view('users.create');
    }
}
