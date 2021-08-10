<?php
   $fileBody = $_GET['str'];
   $file = fopen("ejemplo.txt","wb") or die("no se puedo crear archivo");
   fwrite($file,$fileBody);
   fclose($file);
    
?>