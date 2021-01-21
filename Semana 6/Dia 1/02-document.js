// obtener elementos a partir del ID
var parrafo = document.getElementById("parrafo")

console.log(parrafo);

parrafo.style.color = "red";
parrafo.style.padding = "35px";

// obtener elemtos a partir de la clase

var elementosSecundarios = document.getElementsByClassName("secundario");

console.log(elementosSecundarios);

// obtener elementos por su etiqueta
var misParrfos = document.getElementsByTagName("p");

console.log(misParrfos);

//for (var i =0; i <misParrafos.lengt; i++){
// misParrafos[i].style.border ="2px solid green"
// } 
 
// obtener elementos utilizando un selector como el de css
var query = document.querySelector(".titulo")

 console.log(query)

//  sin son varios

var queries = document.querySelectorAll(".secundario");

console.log(queries)