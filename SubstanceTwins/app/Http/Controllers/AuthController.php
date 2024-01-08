<?php

namespace App\Http\Controllers;

use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Passport\Bridge\AccessToken;

class AuthController extends Controller
{
    public function register(RegisterRequest $request)
    {
        //validar los registros
        $data = $request->validated();

        //crear usuario
        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),

        ]);

        //crear token
        $accessToken = $user->createToken('authToken')->accessToken;

        //Retornar respuesta
        return [
            'user' => $user,
            'access_token' => $accessToken
        ];

    }
    public function login(LoginRequest $request)
    {
        $data = $request->validated();

        if (!Auth::attempt($data)) {
            return response(['errors'], 422);
        }
        //autenticar usuario
        $user = Auth::user();
        $accessToken = $request->user()->createToken('authToken')->plainTextToken; 
        return [
            'access_token' => $accessToken,
            'user' => $user
        ];

    }   
    public function logout(Request $request)
    {

    }
}