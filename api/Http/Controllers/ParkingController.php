<?php

namespace App\Http\Controllers;

class ParkingController
{
    public function get()
    {
        return Response::json('success', $this->table()->get());
    }

    private function table()
    {
        return \Builder::table('parking');
    }
}
