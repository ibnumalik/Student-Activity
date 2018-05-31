<?php

use Pecee\SimpleRouter\SimpleRouter as Route;
use Pecee\Http\Request;
use Pecee\SimpleRouter\Exceptions\NotFoundHttpException;

Route::group(['prefix' => '/api'], function() {
    Route::get('/secret', function() {
        return 'API Secret';
    });

    Route::post('login', 'AuthController@login');
    Route::post('register', 'AuthController@register');
    Route::post('logout', 'AuthController@logout');

    Route::get('parking', 'ParkingController@getAll');
    Route::get('parking/{id}', 'ParkingController@get')
        ->setMatch('/\/parking\/([0-9]+)/');

    Route::post('parking/rent', 'ParkingController@rentParking');
});

Route::error(function(Request $request, \Exception $exception) {
    if($exception instanceof NotFoundHttpException && $exception->getCode() === 404) {
        response()->redirect('/api/secret');
    }
});