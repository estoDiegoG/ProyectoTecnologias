//document.getElementsByTagName("input").onkeypress = function puntos(){return(charCode >= 48 && charCode <= 57)};
//var onkeypress: (this: Window, ev: KeyboardEvent) => any
// var inputs = document.getElementById(n);

// function(){
//     inputs.return(charCode >= 48 && charCode <= 57);
//     // if(inputs[0]){
//     //     inputs.onkeypress=(charCode >= 48 && charCode <= 57);
//     //     return(event.charCode >= 48 && event.charCode <= 57);
//     // }
// }

// var a = document.getElementById("numconta").Value;

// jQuery(document).ready(function()
// {
//    jQuery('.numconta').keypress(function(tecla)
//    {
//       if(tecla.charCode < 48 || tecla.charCode > 57)
//       {
//          return false;
//       }
//    });
// });

function trab(){
    var trabajadores2;
    var trabajadores=parseInt(document.getElementById("#NumTrab").value);

    if(trabajadores > 0 && trabajadores <= 10){//micro empresa
        trabajadores2=trabajadores*50000;
        //document.querySelector("#info12").innerHTML=trabajadores*50000;
    }
    else if(trabajadores > 10 && trabajadores <= 50){ //Empresa pequeña
        trabajadores2=trabajadores*100000;
    }
    else if(trabajadores > 50 && trabajadores <= 250){// Empresa mediana
        trabajadores2=trabajadores*150000;
    }
    else if(trabajadores > 250){//Gran empresa
        trabajadores2=trabajadores*200000;
    }

    return trabajadores2;
}

function metrosc(){
    var mcuadra2;
    var mcuadra=parseInt(document.getElementById("#metros").value);

    if(mcuadra > 0 && mcuadra <= 500){//Micro empresa
        mcuadra2=mcuadra*1000000;
        //document.querySelector("#info12").innerHTML=mcuadra*1000000;
    }
    else if(mcuadra > 500 && mcuadra <= 1200){//Empresa pequeña
        mcuadra2=mcuadra*2500000;
    }
    else if(mcuadra > 500 && mcuadra <= 8000){//Empresa mediana
        mcuadra2=mcuadra*10000000;
    }
    else if(mcuadra > 8000){//Gran empresa
        mcuadra2=mcuadra*50000000;
    }

    return mcuadra2;
}

function riesgos(){
    var riesgo2;
    var riesgo=document.getElementById("#ries").value;

    if(riesgo == "Si"){
        riesgo2=50;
    }

    if(riesgo == "No"){
        riesgo2=25;
    }
}

function generateCotizacion() {
    //obtiene valores del form segun su ID
    
    trab();
    metrosc();
    riesgos();

    document.getElementById("#resul1").innerHTML=(trabajadores2+mcuadra2)-((trabajadores2+mcuadra2)*20/100);
    doument.getElementById("#resul2").innerHTML=trabajadores2+mcuadra2-((trabajadores2+mcuadra2)*15/100);
    doument.getElementById("#resul3").innerHTML=trabajadores2+mcuadra2-((trabajadores2+mcuadra2)*10/100);
    doument.getElementById("#resul4").innerHTML=trabajadores2+mcuadra2;

    // document.querySelector("#info12").innerHTML=trabajadores;
    // document.querySelector("#info13").innerHTML=numeroContacto;

    
}
