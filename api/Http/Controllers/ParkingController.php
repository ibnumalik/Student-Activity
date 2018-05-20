<?php

namespace App\Http\Controllers;

class ParkingController
{
    public function getAll()
    {
        return Response::json('success', $this->table()->get());
    }

    public function get($id)
    {
        $parking = $this->table()->where('id', $id)->get();

        return Response::json('success', $parking);
    }

    public function rentSpace()
    {
        // Add server side validation check if space is rented
        $id = input('id');

        $this->table()->where('id', $id)->update(['rented' => 'true']);

        return Response::json('success');
    }

    private function table()
    {
        return \Builder::table('parking');
    }
}
