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

function generateCotizacion() {


    //obtiene valores del form segun su ID
    let trabajdores=document.querySelector("#NumTrab").value;
    let numeroContacto=document.querySelector("#numconta").value;

    //manda los valores al div resultados :D

    document.querySelector("#info12").innerHTML=trabajdores;
    document.querySelector("#info13").innerHTML=numeroContacto;

    
}
