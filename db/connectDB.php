<?php 
  $connect_db = new PDO('sqlite:portal.db');
  $sql = 'SELECT ' . $_GET['fieldName'] . ' FROM ' . $_GET['tableName'];
  $rows = $connect_db -> query($sql);
  if ($rows !== FALSE){
    $result = $rows -> fetchAll(PDO::FETCH_NUM);
    echo json_encode($result);
  } else {
    echo 'Fail to queries';
  }
 ?>