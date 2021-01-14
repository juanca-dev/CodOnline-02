// el objetivo de este ejercicio es que creen una funcion que permita recibir la base  
// y  la altura como argumentos y me retorne el area de un triangulo,
// segun esos argumentos

// 1. necesito obtener de alguna manera la base  y la altura.
// 2. tener una funcion y dentro de esa  funcion  hacer la operacion.
// 3.retornar el resultado
// 4.imprimir el resultado

// cuando yo reciba algo de prompt,siempre va ser texto,
// entonces hay que pasarlo a un tipo de dato number para havcerlo añado un + antes de prompt +prompt

var base = +prompt("ingrese la base del triangulo");
// console.log(typeof base);
var altura = +prompt("Ingrese la altura");

function calcularArea() {
    var area = base * altura / 2;
    return area;
}

console.log(calcularArea())

var miArea =calcularArea();
console.log(miArea)





// -----------------------------------------
// function obtenerArea(){
//   var areaResultado = document.getElementById("areaResultado");
//   var b = parseInt(document.getElementById("base").value);
    // var h = parseInt(document.getElementById("altura").value);
 
    // var area = (b * h) / 2;
 
    // areaResultado.innerHTML = "" + area;
//    }


//    var textResultado = document.getElementById("textarea1");
// textResultado.value = area;