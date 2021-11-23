<?php

    $nombre = $_POST["nombre"];
    $apellido = $_POST["apellido"];
    $correo = $_POST["correo"];
    $ciudad = $_POST["ciudad"];
    $telefono = $_POST["telefono"];
    $celular = $_POST["celular"];
    $comentario = $_POST["comentario"];
    $correo_emp = "est.diego.garnica@unimilitar.edu.co";
    $asunto = "Prueba envió Lml";
            $to = "est.diego.garnica@unimilitar.edu.co";
$subject = "Asunto del email";
$message = "Este es mi primer envío de email con PHP";

    if ($_POST) {
        echo
        $mensaje = "Hola buen día mi nombre es ".$nombre." ".$apellido." y aquí adjunto mis datos para contactarme con ustedes.\nMuchas gracias por su atención, quedo atento a su respuesta.";
/*         
        $cabecera = "From: '".$correo."'\r\n";
        mail($correo_emp, $asunto, $mensaje); */



 
$enviado=mail($to, $subject, $message);
    //$cabecera .= "Reply-to: '".$correo."'\r\n";
    //$cabecera .= "X-Mailer: PHP/".phpversion();
    //$enviado = mail($correo_emp, $asunto, $mensaje, $cabecera);
    } 

/* if (!empty($nombre) && !empty($apellido)  && !empty($correo) && !empty($ciudad) && !empty($telefono) && !empty($celular) && !empty($comentario)) {
/*     $mensaje = "Hola buen día mi nombre es ".$nombre." ".$apellido." y aquí adjunto mis datos para contactarme con ustedes.\nMuchas gracias por su atención, quedo atento a su respuesta.";
    $cabecera = "From: '".$correo."'\r\n";
    $cabecera .= "Reply-to: '".$correo."'\r\n";
    $cabecera .= "X-Mailer: PHP/".phpversion();
    $enviado = mail($correo_emp, $asunto, $mensaje, $cabecera); */

     if ($enviado) {
        echo "Enviado exitosamente";
    }
    else{
        echo "Ha ocurrido un error";
    } 
//}
//endif; 
?>