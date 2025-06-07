<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Post;
use App\Models\User;
use App\Http\Resources\UserResource;
use Illuminate\Support\Facades\Hash;
class UsersController extends Controller
{
    public function index()
    {
        $users = User::paginate(10);
        return UserResource::collection($users);
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',    
            'email'=>'required|string|email|max:255',
            'password'=>'required|string|min:7',
        ]);
        $hashedPassword = Hash::make($request->password);
        $user = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
             'password'=>$hashedPassword,
        ]);
        return new UserResource($user);
    }


    public function show($id)
    {
        $user = User::find($id);
        if(!$user){
            return response()->json(['error' => 'User not found'], 404);
        }

        return new UserResource($user);
    }
    public function update($id,Request $request)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }
        $user->update($request->all());
        $user->save();
        return response()->json($user);
    }

    public function destroy($id)
    {
        $user = User::find($id);
        if (!$user) {   
            return response()->json(['error' => 'User not found'], 404);
        }
        $user->delete();
        return response()->json(['success' => 'User deleted successfully']);
    }    
}
