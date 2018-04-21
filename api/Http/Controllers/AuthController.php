<?php

namespace App\Http\Controllers;

class AuthController
{
    private $table;

    public function __construct()
    {
        $this->table = \Builder::table('users');
    }

    public function login()
    {
        $email = input('email');
        $password = input('password');

        // implement validation
        // if (!$this->isValid([$email, $password]))
        // {
        //     return 'form is not valid';
        // }

        $user = \Builder::table('users')->where('email', $email)->first();

        if (is_null($user)) {
            return json_encode([
                'status' => 'fail',
                'message' => 'the email does not exist in database'
            ]);
        }

        if (!password_verify($password, $user->password)) {
            return json_encode([
                'status' => 'fail',
                'message' => 'wrong password'
            ]);
        }

        $token = $email.'|'.uniqid().uniqid().uniqid();
        \Builder::table('users')->where('email', $email)->update(['token' => $token]);

        return json_encode(['status' => 'success', 'token' => $token]);
    }

    public function register()
    {
        $inputs = input()->all(['email', 'password']);

        if (!$this->isValid($inputs))
        {
            return 'form is not valid';
        }

        if ($this->isEmailExist($inputs['email']))
        {
            return 'email already used';
        }

        \Builder::table('users')->insert([
            'email' => $inputs['email'],
            'password' => password_hash($inputs['password'], PASSWORD_DEFAULT),
            'role' => 'student'
        ]);

        return json_encode(['status' => 'success']);
    }

    public function logout()
    {
        $token = input('token');
        $users = $this->table->where('token', $token)->get();

        if (empty($token) || empty($users))
        {
            return json_encode(['status' => 'fail']);
        }

        $this->table->where('token', $token)->update(['token' => 'LOGGED OUT']);

        return json_encode(['status' => 'success']);
    }

    private function isEmailExist($email)
    {
        return !is_null(\Builder::table('users')->where('email', '=', $email)->first());
    }

    /**
     * Check if array has falsy values
     *
     * @param array $inputs
     * @return boolean
     */
    private function isValid($inputs)
    {
        return !in_array(false, $this->isEmpty($inputs));
    }

    /**
     * Transform all values in array to (boolean) false depending
     * on whether its empty or not. The element will be false if
     * it is empty.
     *
     * @param array $arrays
     * @return array
     */
    private function isEmpty($arrays)
    {
        return array_map(
            function ($value)
            {
                return !empty($value);
            },
            $arrays
        );
    }
}