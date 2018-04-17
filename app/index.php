<?php

header("Access-Control-Allow-Origin: *");

use Pecee\SimpleRouter\SimpleRouter;

require '../vendor/autoload.php';
require 'core/bootstrap.php';
require_once 'routes.php';

SimpleRouter::setDefaultNamespace('\App\Controllers');

require('core/helpers.php');
SimpleRouter::start();