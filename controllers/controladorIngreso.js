import { buscarIngreso, registrarIngreso } from "../services/servicioIngreso.js";

let valorIngreso=document.getElementById("valor");
let descripcionIngreso=document.getElementById("descripcion");
let fechaIngreso=document.getElementById("fecha");
let botonIngreso=document.getElementById("registroIngreso");

function modal(){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Datos enviados con exito",
      showConfirmButton: false,
      timer: 1400
    });
  } 

botonIngreso.addEventListener("click", function(evento) {
    evento.preventDefault()

    let objetoEnvioDatosIngreso={
        valor:valorIngreso.value,
        descripcion:descripcionIngreso.value,
        fecha:fechaIngreso.value
    }
    modal()
    registrarIngreso(objetoEnvioDatosIngreso)
})


buscarIngreso().then(function (Ingreso) {

    let fila=document.getElementById("fila")
Ingreso.forEach(function(ingresos){
   console.log(ingresos)
   //2.1  TRAVERSING
   let columna=document.createElement("div")
   columna.classList.add("col")
   let tarjeta=document.createElement("div")
   tarjeta.classList.add("card", "h-50", "p-5" , "shadow")

   let nombrecard=document.createElement("h3")
   nombrecard.textContent=ingresos.valor
   
   
   //2.2 se asocian las creaciones
   tarjeta.appendChild(nombrecard)
   columna.appendChild(tarjeta)
   fila.appendChild(columna)
})
})

