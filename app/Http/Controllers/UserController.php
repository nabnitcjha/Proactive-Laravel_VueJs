<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    //
    public function register(Request $request)
    {
            $user = new User();
            $user->password = bcrypt($request->password);
            $user->name = $request->name;
            $user->email = $request->email;
            $user->save();
            return response()->json(compact('user'));
    }

}
