<?php
class  globalMysql {
   public function mysqlCon(){
     $usr = 'root';
     $pwd ='';
     $db = 'tr_manager2017';
     $pdo = new PDO('mysql:host=localhost;dbname='.$db, $usr, $pwd);
     $pdo -> exec("SET NAMES UTF-8");
     return $pdo;
   }
}

?>
