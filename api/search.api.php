<?php
  include 'connection.php';
  $globalMysql = new mysqlglobals;
  $pdo  = $globalMysql -> mysqlCon();
  if(isset($_POST['data_term'])){
    $reference =$_POST['data_term'];
    $query = $pdo-> prepare("SELECT uid, usr_firstname, usr_surname, usr_company, usr_faculty, usr_major FROM tn_member WHERE usr_firstname LIKE '%$reference%' || usr_surname LIKE '%$reference%' || uid LIKE '%$reference%' ");
    $query-> execute();
    $result = $query->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(array('user'=>$result));
  }
if (isset($_POST['SELECTDATA'])){
    $reference =$_POST['SELECTDATA'];
    $query = $pdo -> prepare("SELECT uid, usr_prefix, usr_firstname, usr_surname, usr_faculty, usr_major FROM tn_member WHERE uid = $reference");
  //  echo ("SELECT uid, usr_prefix, usr_firstname, usr_surname, usr_faculty, usr_major FROM tn_member WHERE uid = $reference");
    $query -> execute();
    $result = $query ->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode(array('user'=>$result));
}

 ?>
