<?php

namespace App\Http\Controllers;

use Doctrine\ORM\EntityManager;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    public function __invoke(Request $request)
    {
        $authError = $request->get('auth_error');

        switch($authError) {
            case 1:
                $error = 'Username not found';
                break;
            case 2:
                $error = 'Invalid password';
                break;
            case 3:
                $error = 'Username and password are required';
                break;
            default:
                $error = '';
        }

        return view('login', ['error' => $error]);
    }
}
