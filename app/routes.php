<?php

use Pecee\SimpleRouter\SimpleRouter;

SimpleRouter::group(['prefix' => '/api'], function() {
    SimpleRouter::get('/secret', function() {
        return 'API Secret';
    });

    SimpleRouter::post('/login', 'AuthController@login');
});