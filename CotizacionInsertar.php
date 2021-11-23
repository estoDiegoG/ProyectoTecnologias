<?php

//datos para conectarse a su base de datos
/* $nombreservidor = 'epiz_30286723';
$usuarioservidor = 'sql111.epizy.com';
$contraseñaservidor = 'wEusbDuEJK6';
$port= "8889"; 
$nombreBD = "epiz_30286723_lmlsolutions"; */

$nombreservidor = 'localhost';
$usuarioservidor = 'root';
$contraseñaservidor = 'root';
$port= "8889"; 
$nombreBD = "lmlsolutions";

$conn = new mysqli("$nombreservidor:$port", $usuarioservidor, $contraseñaservidor); 
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else echo "conectado";

// include "CotizacionBD.php"
// error_reporting(0);

// $json = file_get_contents('php//input');

// $data = json_decode($json,true);

/* $numero = $data["numero"];
$empresa = $data["nombre_empresa"];
$ntrabajadores = $data["numero_trabajadores"];
$metrosc = $data["metros_cuadrados"];
$activity = $data["actividades"];
$riesgos = $data["riesgo"];
$ubication = $data["ubicacion"];
$nsedes = $data["sedes"];
$ingreso = $data["ingreso"];

$sql = "INSERT INTO product (NumeroContacto, NombreEmpresa, NumeroTrabajadores, MetrosCuadrados, Actividades, Riesgo, Ubicacion, Sedes, ingreso) VALUES
 ('".$numero."', '".$empresa."', '".$ntrabajadores."', '".$metrosc."', '".$activity."', '".$riesgos."', '".$ubication."', '".$nsedes."', '".$ingreso."')";
$enlace¡ $conn->query($sql;)
if ($enlace->query($sql) === TRUE) {
    echo "Insercion completada";
}
else{
    echo "Error insercion".mysqli_error();
}  */


?>