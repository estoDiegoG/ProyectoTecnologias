<?php
$nombreservidor = "localhost";
$usuarioservidor = "root";
$contraseñaservidor = "root";
$nombreBD = "lmlsolutions";
/* 
$enlace =new mysqli_connect($nombreservidor, $usuarioservidor, $contraseñaservidor, $nombreBD);*/
$conn = new mysqli($nombreservidor, $usuarioservidor, $contraseñaservidor); 
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}



/* if(!$enlace){
    echo "error: No se pudo conectar a MySQL.".mysqli_error();
}
else{
    echo "Conexion Correcta.";
} */
?>