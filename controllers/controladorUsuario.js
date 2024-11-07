import {
  buscarUsuario,
  registrarUsuario,
} from "../services/serviciosUsuario.js";

//RECOGER LOS DATOS DE UN FORMULARIO

//1. CADA INPUT, SLEC, TEXTAREA DEL FROM LE CREO UNA VARIABLE asociada al id del html
let nombreUsuario = document.getElementById("nombres");
let fechaNacimiento = document.getElementById("fecha");
let ubicacionUsuario = document.getElementById("lugar");
let metaAhorroUsuario = document.getElementById("metaAhorro");

//2. crea un variabñe para asopcial el boton del formulario
let botonRegistro = document.getElementById("RegitroUsuario");

function modal(){
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Datos enviados con exito",
    showConfirmButton: false,
    timer: 1400
  });
} 
//3. se detecta el click del boton del formulario
botonRegistro.addEventListener("click", function (evento) {
  evento.preventDefault();

  //4. se construye un objeto con los datos del formulario
  let objetoEnvioDatosUsuario = {
    nombres: nombreUsuario.value,
    fechaNacimiento: fechaNacimiento.value,
    ubicacion: ubicacionUsuario.value,
    metaAhorro: metaAhorroUsuario.value,
  };
  modal()
  registrarUsuario(objetoEnvioDatosUsuario);
});

//objetivo renderizar datos que vienen del back
//1. se queman los datos

//llamando la funcion que va al api a buscar el usuario
buscarUsuario().then(function (respuesta) {
  //2. recorrer el arreglo de datos
  let fila = document.getElementById("fila");
  respuesta.forEach(function (usuario) {
    //2.1  TRAVERSING
    let columna = document.createElement("div");
    columna.classList.add("col");
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "h-50", "p-5", "shadow");

    let nombrecard = document.createElement("h3");
    nombrecard.textContent = usuario.nombres;

    //2.2 se asocian las creaciones

    tarjeta.appendChild(nombrecard);
    columna.appendChild(tarjeta);
    fila.appendChild(columna);
  })
})
