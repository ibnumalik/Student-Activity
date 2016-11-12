<?php
// $db = new PDO('sqlite:../db/portal.db');
include '../db/config.php';

$data     = json_decode(file_get_contents("php://input"));
$email    = $data->email;
$password = $data->password;

$q     = "INSERT INTO students (email, password) VALUES (:email, :password)";
$query = $db->prepare($q);
//    echo var_dump($query);
$execute = $query->execute(array(
    ":email"    => $email,
    ":password" => $password,
));

echo json_encode($email);