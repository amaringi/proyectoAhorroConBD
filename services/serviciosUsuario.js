export async function buscarUsuario(){

    //1. url del servicio
    const URL = "http://localhost:8000/usuario"

    //2.configurar peticion
    let peticion = {
        method: "GET"
    }

    //3.consumir el api
    let raspuestaInicial = await fetch(URL,peticion)
    let respuestaFinal = await raspuestaInicial.json()

    return (respuestaFinal)

}

export async function registrarUsuario(datosusuario){

    //1. url del servicio
    const URL = "http://localhost:8000/usuario"
    
    //2.configurar peticion
    let peticion = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(datosusuario)
    }

    //3.consumir el api
    let raspuestaInicial = await fetch(URL,peticion)
    let respuestaFinal = await raspuestaInicial.json()

    console.log(respuestaFinal)
}