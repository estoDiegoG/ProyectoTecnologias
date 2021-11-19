<?php

include "CotizacionBD.php"
error_reporting(0);

$json = file_get_contents('php//input');

$data = json_decode($json,true);

$numero = $data["numero"];
$empresa = $data["nombre_empresa"];
$ntrabajadores = $data["numero_trabajadores"];
$metrosc = $data["metros_cuadrados"];
$activity = $data["actividades"];
$riesgos = $data["riesgo"];
$ubication = $data["ubicacion"];
$nsedes = $data["sedes"];
$ingreso = $data["ingreso"];

$sql = "INSERT INTO product (NumeroContacto, NombreEmpresa, NumeroTrabajadores, MetrosCuadrados, Actividades, Riesgo, Ubicacion, Sedes, ingreso) VALUES ('".$numero."', '".$empresa."', '".$ntrabajadores."', '".$metrosc."', '".$activity."', '".$riesgos."', '".$ubication."', '".$nsedes."', '".$ingreso."')";

if ($enlace->query($sql) === TRUE) {
    echo "Insercion completada";
}
else{
    echo "Error insercion".mysqli_error();
}


?>