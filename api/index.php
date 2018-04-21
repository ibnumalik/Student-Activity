<?php
header("Access-Control-Allow-Origin: *");

use Pecee\SimpleRouter\SimpleRouter;

require '../vendor/autoload.php';
require 'core/bootstrap.php';
require_once './Http/routes.php';

SimpleRouter::setDefaultNamespace('\App\Http\Controllers');

require('./Http/helpers.php');
SimpleRouter::start();