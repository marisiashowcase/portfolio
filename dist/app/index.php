<?php

require '../../vendor/autoload.php';


require_once __DIR__.'/Contact.php';

if($_SERVER['REQUEST_METHOD']==='POST' && empty($_POST)) {
    $_POST =  json_decode(file_get_contents("php://input"), true);

    $request = $_POST['formData'];
    $request['ip_address'] = $_SERVER['REMOTE_ADDR'];

    $email = new Contact();
    echo $email->process($request);

}

//die;



