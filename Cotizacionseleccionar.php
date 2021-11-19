<?php

include "CotizacionBD.php"

$sql = "SELECT * FROM product";

$resultados = $enlace->query($sql);
$data = array();

if ($resultados->num_rows > 0) {
    //echo "Si hay datos: ".$resultados->num_rows;
    while ($row = $resultados->fetch_assoc()) {
        //echo $row["ProductName"];
        $data[] = json_encode($row);
    }
    echo json_encode($data);
}
else{
    echo "No hay datos".mysqli_error();
}


?>