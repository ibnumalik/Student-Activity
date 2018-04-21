<?php

namespace App\Http\Controllers;

class Response
{
    public static function json($status, $data = null)
    {
        return json_encode([
            'status' => $status,
            'data' => $data
        ]);
    }
}