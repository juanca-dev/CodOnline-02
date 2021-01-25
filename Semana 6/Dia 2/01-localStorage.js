// setItem("nombre_clave","dato o guardar")
window.localStorage.setItem("nombre","Juan Madrid");

// getItem("nombre_clave"),  obteniendo un dato del localstorage

var miNombre = localStorage.getItem(miNombre);

var btnEliminar = document.getElementById("eliminar");

btnEliminar.addEventListener("click",function(){
    localStorage.removeItem("nombre")
})
