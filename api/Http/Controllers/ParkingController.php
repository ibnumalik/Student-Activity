<?php

namespace App\Http\Controllers;

class ParkingController
{
    public function getAll()
    {
        return Response::json('success', $this->table()->get());
    }

    public function rentSpace()
    {
        $id = input('id');

        $this->table()->where('id', $id)->update(['rented' => 'true']);

        return Response::json('success');
    }

    private function table()
    {
        return \Builder::table('parking');
    }
}
