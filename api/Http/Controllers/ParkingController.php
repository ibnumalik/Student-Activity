<?php

namespace App\Http\Controllers;

class ParkingController
{
    /**
     * User token
     *
     * @var [string]
     */
    private $token;

    public function getAll()
    {
        return Response::json('success', $this->table()->get());
    }

    public function get($id)
    {
        $parking = $this->table()->where('id', $id)->get();

        if (empty($parking)) {
            return Response::json('fail', [
                'message' => 'The parking space does not exist'
            ]);
        }

        return Response::json('success', $parking);
    }

    public function rentParking()
    {
        $this->token = input('token');
        $parkingId = input('id');

        $parking = $this->getParking($parkingId)->first();
        $receipt = $this->generateReceipt();

        if ($parking->rented === 'true') {
            return Response::json('fail', [
                'message' => 'The parking space has been rented'
            ]);
        }

        $this->getParking($parkingId)->update(['rented' => 'true']);
        $this->attachParkingToUser($parkingId, $receipt);

        return Response::json('success', [
            'receipt' => $receipt
        ]);
    }

    private function table()
    {
        return \Builder::table('parking');
    }

    private function pivotTable()
    {
        return \Builder::table('user_parking');
    }

    private function getParking($id)
    {
        return $this->table()->where('id', $id);
    }

    private function getUser()
    {
        $user = new UserController;
        return $user->getUser($this->token);
    }

    private function attachParkingToUser($parkingId, $receipt)
    {
        return $this->pivotTable()->insert([
            'parking_id' => $parkingId,
            'user_id' => $this->getUser()->id,
            'receipt' => $receipt
        ]);
    }

    private function generateReceipt()
    {
        return $this->getUser()->email . '-' . uniqid() . uniqid();
    }
}
