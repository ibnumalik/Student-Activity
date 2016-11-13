<?php 
  include('../db/config.php');
  $data = json_decode(file_get_contents("php://input"));
  
  $token = $data->token;
  $db->query("UPDATE students SET token='LOGGED OUT' WHERE token=$token");

 ?>