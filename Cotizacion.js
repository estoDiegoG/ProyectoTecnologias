function generateCotizacion() {
    let trabajadores2=0, mcuadra2=0, riesg=0, ubicacion2=0, sedes2=0
    var form = document.getElementById("formulario_cotizacion");
    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);

    let formulario=document.getElementById("formulario_cotizacion")
    let trabajadores=formulario.elements["numero_trabajadores"].value
    let mcuadra=formulario.elements["metros_cuadrados"].value
    let riesgo=formulario.elements["riesgo"].value
    let ubicacion=formulario.elements["ubicacion"].value
    let sedes=formulario.elements["sedes"].value

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
