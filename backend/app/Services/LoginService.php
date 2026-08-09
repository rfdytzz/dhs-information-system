<?php

namespace App\Services;

use Illuminate\Support\Facades\Auth;

class LoginService {
    public function login($credentials) {
        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Incorrect Email or Password'
            ], 401);
        }

        $user = Auth::user();
        $token = $user->createToken('auth:sanctum')->plainTextToken;
        $role = $user->role;

        return response()->json([
            'status' => 'success',
            'role' => $role,
            'token' => $token 
        ], 200);
    }
}