<?php
class  mysqlglobals {
   public function mysqlCon(){
     $usr = 'root';
     $pwd ='';
     $db = 'lpruit';
     $pdo = new PDO('mysql:host=localhost;dbname='.$db, $usr, $pwd);
     $pdo -> exec("set names utf8");
     return $pdo;
   }
}

?>
