<?php

namespace App\Controllers;

class AuthController
{
    public function login()
    {
        var_dump(input());
        return $input;
    }
}