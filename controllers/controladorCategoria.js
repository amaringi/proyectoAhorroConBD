import { buscarCategoria, registrarCategoria } from "../services/servicioCategoria.js";

let nombreCategoria =document.getElementById("nombre");
let descripcionCategoria=document.getElementById("descripcion");
let fotoCategoria =document.getElementById("foto");
let fechaCategoria =document.getElementById("fecha");

let botonCategoria = document.getElementById("RegitroCategoria");

function modal(){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Datos enviados con exito",
      showConfirmButton: false,
      timer: 1400
    });
  } 
botonCategoria.addEventListener("click", function(evento) {
    evento.preventDefault();

    let objetoEnvioDatosCategoria = {
        nombre: nombreCategoria.value,
        descripcion: descripcionCategoria.value,
        foto: fotoCategoria.value,
        fecha: fechaCategoria.value
    };
    modal()
    registrarCategoria(objetoEnvioDatosCategoria);
});


buscarCategoria().then(function(categoria){

    let fila=document.getElementById("fila")
categoria.forEach(function(categorias){
   console.log(categoria)
   //2.1  TRAVERSING
   let columna=document.createElement("div")
   columna.classList.add("col")
   let tarjeta=document.createElement("div")
   tarjeta.classList.add("card", "h-50", "p-5" , "shadow")
   let nombrecard=document.createElement("h3")
   nombrecard.textContent=categorias.nombre

   //2.2 se asocian las creaciones
   tarjeta.appendChild(nombrecard)
   columna.appendChild(tarjeta)
   fila.appendChild(columna)
})

})


