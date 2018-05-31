<?php

namespace App\Http\Controllers;

class UserController
{
    public function getUser($token)
    {
        return $this->table()->where('token', $token)->first();
    }

    private function table()
    {
        return \Builder::table('users');
    }
}