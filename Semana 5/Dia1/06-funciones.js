function saludar(nombre, edad) {
    var saludo = "hola yo soy " + nombre + "y tengo" + edad + "años";

    return saludo

    // Todo lo que esta debajo del return no se ejecutará
    // console.log("Yo estoy después del return");
}

// ambito/scope lo que se declare dentro de una funcion existe ahi adentro.
// console.log(saludo);


var miSaludo = saludar("junca","veinticuatro");

console.log(miSaludo);

// sin variables

var valor = 100;  // variable global 


function imprimirValor() {
    console.log(valor)
    
}

imprimirValor();


