<?php
/**
 * Created by PhpStorm.
 * User: marisia
 * Date: 2/24/19
 * Time: 12:03 PM
 */

require __DIR__.'/vendor/autoload.php';

$dotenv = Dotenv\Dotenv::create(__DIR__);
$dotenv->load();

use Illuminate\Database\Capsule\Manager as Capsule;

$capsule = new Capsule;

if(getenv('APP_ENV') == 'local'){

    $host = getenv('DB_LOCAL_HOST');
    $dbname = getenv('DB_LOCAL_NAME');
    $dbusername = getenv('DB_LOCAL_USERNAME');
    $dbpassword = getenv('DB_LOCAL_PASSWORD');
}
else{

    $host = getenv('DB_HOST');
    $dbname = getenv('DB_NAME');
    $dbusername = getenv('DB_USERNAME');
    $dbpassword = getenv('DB_PASSWORD');
}

$capsule->addConnection([
    'driver'    => 'mysql',
    'host'      => $host,
    'database'  => $dbname,
    'username'  => $dbusername,
    'password'  => $dbpassword,
    'charset'   => 'utf8',
    'collation' => 'utf8_unicode_ci',
    'prefix'    => '',
]);

$capsule->setAsGlobal();
$capsule->bootEloquent();


