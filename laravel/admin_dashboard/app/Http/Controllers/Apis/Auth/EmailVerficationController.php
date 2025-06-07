<?php

namespace App\Http\Controllers\Apis\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\traits\ApiTrait;
class EmailVerficationController extends Controller
{ 
     use ApiTrait;
    public function sendCode(Request $request){
         $token = $request->header('Authorization');
         $authenticated = Auth::guard("snactum")->user();
         $code = rand(10000,99999);
         $expirationDate = date('Y-m-d H:i:s', strtotime('+2 minutes'));
          
         $user = User::find($authenticated->id);
         $user->email_verification_code = $code;
         $user->email_verification_code_expires_at = $expirationDate;
         $user->save();
         return $this->Data(compact('user'));
        }

    public function checkCode(Request $request){
        $token=$request->header('Authorization');
        $authenticated = Auth::guard("snactum")->user();
        $user = User::find($authenticated->id);
        if($user->$code == $request->code && $user->$expirationDate < date('Y-m-d H:i:s')){
            $user->email_verified_at = date('Y-m-d H:i:s');
            $user->save();
            return $this->Data(compact('user'));
        }
        else{
            return $this->ErrorMassage(['code'=>"invalid code"],"Invalid code",401);
        }
    }
}
