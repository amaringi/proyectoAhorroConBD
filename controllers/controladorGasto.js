import { buscarGasto, registrarGasto } from "../services/servicioGasto.js";

let descripcionGasto = document.getElementById("descripcion");
let categroriaGasto = document.getElementById("categoria");
let valorGastos = document.getElementById("valor");
let fechaGastos = document.getElementById("fecha");
let botonAgregarGasto = document.getElementById("registroGasto");

function modal(){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Datos enviados con exito",
      showConfirmButton: false,
      timer: 1400
    });
  } 

botonAgregarGasto.addEventListener("click", function(evento) {
    evento.preventDefault();
    
    let objetoEnvioDatoGasto = {
        descripcion:descripcionGasto.value,
        categoria: categroriaGasto.value,
        valor: valorGastos.value,
        fecha: fechaGastos.value
    }

    modal()
    registrarGasto(objetoEnvioDatoGasto)
});


//renderizar los datos que vienen del back



buscarGasto().then(function (gasto){
    let fila=document.getElementById("fila")
gasto.forEach(function(gastos){
   console.log(gastos)
   //2.1  TRAVERSING
   let columna=document.createElement("div")
   columna.classList.add("col")
   let tarjeta=document.createElement("div")
   tarjeta.classList.add("card", "h-50", "p-5" , "shadow")
   let nombrecard=document.createElement("h3")
   nombrecard.textContent=gastos.descripcion

   //2.2 se asocian las creaciones
   tarjeta.appendChild(nombrecard)
   columna.appendChild(tarjeta)
   fila.appendChild(columna)
})

})
//2. recorrer el arreglo de datos 
