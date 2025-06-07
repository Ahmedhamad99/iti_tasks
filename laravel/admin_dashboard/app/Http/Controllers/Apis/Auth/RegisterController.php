<?php

namespace App\Http\Controllers\Apis\Auth;
use App\Models\User;
use App\Http\Controllers\Controller;
use App\Http\traits\ApiTrait;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Http\Requests\RegisterRequest;

class RegisterController extends Controller
{
    use ApiTrait;
    /**
     * Handle the incoming request.
     */
    public function __invoke(RegisterRequest $request)
    {
        $data = $request->except("password","password_confirmation");
         $data['password'] = Hash::make($request->password);
        // dd($data);
        $user = User::create($data);
        $user->token = $user->createToken($request->device_name)->plainTextToken;
        return $this->Data(compact("user"),"",201 );
    }
}
