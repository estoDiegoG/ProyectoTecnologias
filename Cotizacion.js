function generateCotizacion() {
    let trabajadores2=0, mcuadra2=0, riesg=0, ubicacion2=0, sedes2=0
    var form = document.getElementById("formulario_cotizacion");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);

    let formulario=document.getElementById("formulario_cotizacion")
    let numconta=formulario.elements["numero"].value
    let nameEmpresa=formulario.elements["nombre_empresa"].value
    let trabajadores=formulario.elements["numero_trabajadores"].value //Valor para calcular
    let mcuadra=formulario.elements["metros_cuadrados"].value //Valor para calcular
    let actividad=formulario.elements["actividades"].value
    let riesgo=formulario.elements["riesgo"].value //Valor para calcular
    let ubicacion=formulario.elements["ubicacion"].value //Valor para calcular
    let sedes=formulario.elements["sedes"].value //Valor para calcular

    //Numero de trabajadores
    if(trabajadores > 0 && trabajadores <= 10){//micro empresa
        trabajadores2=trabajadores*5000;
                //document.querySelector("#info12").innerHTML=trabajadores*50000;
    }
    else if(trabajadores > 10 && trabajadores <= 50){ //Empresa pequeña
        trabajadores2=trabajadores*10000;
    }
    else if(trabajadores > 50 && trabajadores <= 250){// Empresa mediana
        trabajadores2=trabajadores*15000;
    }
    else if(trabajadores > 250){//Gran empresa
        trabajadores2=trabajadores*20000;
    }

    //Metros cuadrados
    if(mcuadra > 0 && mcuadra <= 500){//Micro empresa
        mcuadra2=800000;
    }
    else if(mcuadra > 500 && mcuadra <= 1200){//Empresa pequeña
        mcuadra2=2500000;
    }
    else if(mcuadra > 500 && mcuadra <= 8000){//Empresa mediana
        mcuadra2=8000000;
    }
    else if(mcuadra > 8000){//Gran empresa
        mcuadra2=15000000;
    }

    //Riesgos
    if (riesgo == "Si") {
        riesg=300000
    }
    else if(riesgo == "No"){
        riesg=100000
    }

    //Ubicación
    if (ubicacion == "Bogotá") {
        ubicacion2=100000
    }
    else if (ubicacion != "Bogotá"){
        ubicacion2=500000
    }

    //sedes
    if (sedes > 0) {
        sedes2=100000*sedes
    }

    let total=trabajadores2+mcuadra2+riesg+ubicacion2+sedes2

    document.querySelector("#resul1").innerHTML=(total)-(total*0.2)
    document.querySelector("#resul2").innerHTML=(total)-(total*0.15)
    document.querySelector("#resul3").innerHTML=(total)-(total*0.1)
    document.querySelector("#resul4").innerHTML=total
}

window.onload = function(){
    document.getElementById("buton1").onclick=function(){
    let numconta=document.forms.namedItem("formulario_cotizacion").elements["numero"].value
    let nameEmpresa=document.forms.namedItem("formulario_cotizacion").elements["nombre_empresa"].value
    let trabajadores=document.forms.namedItem("formulario_cotizacion").elements["numero_trabajadores"].value
    let mcuadra=document.forms.namedItem("formulario_cotizacion").elements["metros_cuadrados"].value
    let actividad=document.forms.namedItem("formulario_cotizacion").elements["actividades"].value
    let riesgo=document.forms.namedItem("formulario_cotizacion").elements["riesgo"].value
    let ubicacion=document.forms.namedItem("formulario_cotizacion").elements["ubicacion"].value
    let sedes=document.forms.namedItem("formulario_cotizacion").elements["sedes"].value
    let ingresarFormulario=document.forms.namedItem("formulario_cotizacion").elements["ingreso"].value

    var miObj = new Object();

    miObj.numero = numconta
    miObj.nombre_empresa = nameEmpresa
    miObj.numero_trabajadores = trabajadores
    miObj.metros_cuadrados = mcuadra
    miObj.actividades = actividad
    miObj.riesgo = riesgo
    miObj.ubicacion = ubicacion
    miObj.sedes = sedes
    miObj.ingreso = ingresarFormulario
    }

    //console.log(miObj)
    enviardatos(miObj)
}

function enviardatos(datos){
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState = 4) {
            this.responseText;
        }
    }
    xhttp.open("POST", "CotizacionInsertar.php", true);
    xhttp.setRequestHeader("Content-Type", "application/json; chatset=UTF-8");
    let parametros = JSON.stringify(datos);
    xhttp.send(parametros);
}
