<?php 
  include('../db/config.php');
  $data = json_decode(file_get_contents("php://input"));
  
  $token = $data->token;
  $token_exec = $db->query("UPDATE students SET token='LOGGED OUT' WHERE token=$token");
  $apa = $token_exec->execute(array( ':token' => $token ));

  echo $apa;

 ?>