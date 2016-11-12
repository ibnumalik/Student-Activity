<?php 
  include("../db/config.php");
  $data = json_decode(file_get_contents("php://input"));
  $email = $data->email;
  $password = $data->password;

  $auth_info = $db->query("SELECT email FROM students WHERE email='$email' AND password='$password'");
  $auth_info = $auth_info->fetchAll();

  echo json_encode($auth_info);

 ?>