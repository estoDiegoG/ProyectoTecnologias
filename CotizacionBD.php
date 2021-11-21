<?php
$nombreservidor = "mysql.webcindario.com";
$usuarioservidor = "lmlsolutions";
$contraseñaservidor = "3f3c1u5m45t3r";
$nombreBD = "lmlsolutions";

$enlace = mysqli_connect($nombreservidor, $usuarioservidor, $contraseñaservidor, $nombreBD);

if(!$enlace){
    echo "error: No se pudo conectar a MySQL.".mysqli_error();
}
else{
    echo "Conexion Correcta.";
}
?>