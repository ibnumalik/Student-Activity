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

        $parking = $this->getParking($id)->first();

        if ($parking->rented === 'true') {
            return Response::json('fail', [
                'message' => 'The parking space has been rented'
            ]);
        }

        $this->getParking($id)->update(['rented' => 'true']);

        return Response::json('success');
    }

    private function table()
    {
        return \Builder::table('parking');
    }

    private function getParking($id)
    {
        return $this->table()->where('id', $id);
    }
}
