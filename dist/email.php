<?php

require_once '../Contact.php';
ini_set('display_errors', 1);  error_reporting(E_ALL);


if($_SERVER['REQUEST_METHOD']==='POST' && empty($_POST)) {
    $_POST =  json_decode(file_get_contents("php://input"), true);

    $request = $_POST['formData'];
    $request['ip_address'] = $_SERVER['REMOTE_ADDR'];

    $email = new Contact();
    echo $email->process($request);

}

