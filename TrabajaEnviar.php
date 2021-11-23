<?php

if (issei($_POST['enviar'])) {
    if (!empty($_POST['nombre1']) && !empty($_POST['nombre2']) && !empty($_POST['apellido1']) && !empty($_POST['apellido2']) && !empty($_POST['tip_docu']) && !empty($_POST['num_docu']) && !empty($_POST['correo']) && !empty($_POST['ciudad']) && !empty($_POST['tel_fijo']) && !empty($_POST['celular']) && !empty($_POST['formacion']) && !empty($_POST['comentario'])) {
        $nombre1 = $_POST["nombre1"];
        $nombre2 = $_POST["nombre2"];
        $apellido1 = $_POST["apellido1"];
        $apellido2 = $_POST["apellido2"];
        $documento = $_POST["num_docu"];
        $correo = $_POST["correo"];
        $ciudad = $_POST["ciudad"];
        $telefono = $_POST["tel_fijo"];
        $celular = $_POST["celular"];
        $formacion = $_POST["formacion"];
        $comentario = $_POST["comentario"];
        $hoja_vida = $_POST["hoja_vida"];
        $cabecera = "From: '".$correo."'"."\r\n";
        $cabecera .= "Reply-to: '".$correo."'"."\r\n";
        $cabecera .= "X-Mailer: PHP/".phpversion();
        $mensaje = "Hola buen día mi nombre es ".$nombre1." ".$nombre2." ".$apellido1." ".$apellido2." y aquí adjunto mis datos para trabajar con ustedes.\n\n"."Nombre: ".$nombre1." ".$nombre2." ".$apellido1." ".$apellido2."\nNumero de documento: ".$documento."\nCorreo electronico: ".$correo."\nCiudad de residencia: ".$ciudad."\nTelefono fijo: ".$telefono."\nNumero celular: ".$celular."\nFormación academica: ".$formacion."\n\n".$hoja_vida;
        $mail = @mail("camiloamaya32@gmail.com","Prueba Lml",$mensaje,$cabecera);

        if ($mail) {
            echo "Mail enviado exitosamente";
        }
    }
}
?>