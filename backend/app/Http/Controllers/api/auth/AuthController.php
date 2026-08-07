<?php

namespace App\Http\Controllers\api\auth;

use App\Http\Controllers\Controller;
use App\Services\LoginService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function __construct(
        protected LoginService $loginService
    ) {}

    public function login(Request $request) {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $result = $this->loginService->login($credentials);

        return $result;
    }

    public function logout(Request $request) {
        $user = Auth::user();
        $request = $user->currentAccessToken()->delete();

        return response()->json([
            'message' => 'success'
        ], 200);
    }
}
