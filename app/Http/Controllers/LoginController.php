<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\ValidationException;

class LoginController extends Controller
{
    // ログイン
    public function login(Request $request)
    {
        $credentials = $request->validate([
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string']
        ]);

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'errors' => 'Incorrect Email or Password'
            ], Response::HTTP_UNPROCESSABLE_ENTITY);
            // return response()->json(['message' => 'Login successful'], 200);
            // throw ValidationException::withMessages([
            //     'email' => ['The provided credentials are incorrect'],
            // ]);
        }

        return response()->json([
            'user' => $request->user()
        ]);

    }

    // ログアウト
    public function logout()
    {
        Auth::logout();
        return response()->json(['message' => 'Logged out'], 200);
    }

    // ログインユーザー情報取得
    public function user(Request $request)
    {
        return response()->json([
            'user' => $request->user()
        ]);
    }
}
