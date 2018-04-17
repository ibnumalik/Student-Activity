<?php

use App\Core\App;

App::bind('config', require('config.php'));

new \Pixie\Connection('sqlite', App::get('config')['database'], 'Builder');