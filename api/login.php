<?php
include "../db/config.php";
$data     = json_decode(file_get_contents("php://input"));
$email    = $data->email;
$password = sha1($data->password);

$auth_info = $db->query("SELECT email FROM students WHERE email='$email' AND password='$password'");
$auth_info->execute(array(
    ':email'    => $email,
    ':password' => $password,
));
$authenticate = $auth_info->fetch(PDO::FETCH_ASSOC);

$token;
if (count($auth_info) == 1) {
    // User is login and give token
    $token   = $email . " | " . uniqid() . uniqid() . uniqid();
    $q       = "UPDATE students SET token=:token WHERE email=:email AND password=:password";
    $query   = $db->prepare($q);
    $execute = $query->execute(array(
        ":token"    => $token,
        ":email"    => $email,
        ":password" => $password,
    ));

    echo json_encode($token);
} else {
    echo "ERROR";
}
