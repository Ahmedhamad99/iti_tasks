<?php

namespace App\Http\Controllers\Apis\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\traits\ApiTrait;
use App\Http\Requests\LoginRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;


class LoginController extends Controller
{
    use ApiTrait;

    public function login(LoginRequest $request){
         $user = User::where('email',$request->email)->first();
         if(! Hash::check($request->password,$user->password)){
                  return $this->ErrorMessage(['email'=>"The provuer cradintal incorect"],'wrong att mp',401);
         } 
         $user->token = "Barer ".$user->createToken($request->device_name)->plainTextToken;
         if(is_null($user->email_verified_at)){
            return $this->Data(compact('user'),"User not verified",401);
        }
         return $this->Data(compact('user'));
    }

    public function logout(){
        $authnticatedUser = Auth::guard('sanctum')->user();
        $token = $request->header('Authorization');

        $barerwith = explode('|',$token)[0];
        $tokenId = explode(' ',$barerwith)[1]; 
        $authnticatedUser->tokens()->where('id',$tokenId)->delete();

        return $this->SuccessMessage("User Has loged out Successfully");

    }

    public function logoutAllDevices(){
    $authnticatedUser = Auth::guard('sanctum')->user();
    $authnticatedUser->tokens()->delete();
    return $this->SuccessMessage("User Has loged out Successfully from all devices");


    }

}
