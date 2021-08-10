<?php
    // Recoleccion del nombre del Archivo.
    $fileBody = $_GET['str'];

    // abrir el archivo
    $file = fopen($fileBody,"rb",true) or die("no se puedo crear archivo");
    $return = fread($file,filesize($fileBody));

    // retorno del texto dentro del archivo
    echo $return;
    fclose($file);
    // proceso deprecado
?>