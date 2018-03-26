<?php

include('../db/config.php');

$data     = json_decode(file_get_contents("php://input"));
$email    = $data->email;
$password = $data->password;
$hash_passwd = sha1($password);

function email_exists( $database, $item_value, $item_type ) {
  $check = $database->query("SELECT * FROM students WHERE $item_type = '$item_value' ");
  $check -> setFetchMode(PDO::FETCH_ASSOC);
  $checks = $check->fetch();

  if ( $checks[$item_type] ) {
    return true;
  } else {
    return false;
  }
}

if ( email_exists ( $db, $email, 'email' ) === true ) {
  echo "exist";
} else {
    $query = $db->prepare("INSERT INTO students (email, password) VALUES (:email, :password)");
    $query->bindparam(":email", $email);
    $query->bindparam(":password", $hash_passwd);
    $query->execute();
  }

?>