<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use App\Http\traits\ApiTrait;
class UserVerified
{
    use ApiTrait;
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $user = Auth::guard('snactum')->user();
        if(is_null($user)||is_null($user->email_verified_at)){
               return $this->ErrorMasseage(['token'=>'tokrn invalid'],'Unauthorized',401);
        }
        return $next($request);
    }
}
