/*  
Necesito  un programa que me permita  sabeer cuanto a ganado 
en todo el 2020,si es que  el total de lo ganado es mayor a 1000
se debe reducir el total en un 8%.

*/

/*
1.El sueldo por mes
2.de ahi necesito sumarlo
3.si el monto supera los 1000 quitarle el (8%)
 */

var sueldo = 0
var descuento =  0.08;
// inicio desde el mes  1 y voy avanzando hasta el mes 12

for(var i = 1; i <= 12; i++){
    // ingreso un numero, el sueldo de ese mes
    var sueldoxmes =+prompt("ingrese el sueldo del mes " + i);
    sueldo = sueldo + sueldoxmes;
    console.log("Paso " + i + " - " + sueldo)
}
if(sueldo > 10000){
    // sueldo = sueldo* 0.92;
    sueldo = sueldo * (1 - descuento)
    
}

console.log("El sueldo total es: " + sueldo);
