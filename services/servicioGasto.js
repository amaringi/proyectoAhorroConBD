export async function buscarGasto(){

    //1. url del servicio
    const URL = "http://localhost:8000/gasto"

    //2.configurar peticion
    let peticion = {
        method: "GET"
    }

    //3.consumir el api
    let raspuestaInicial = await fetch(URL,peticion)
    let respuestaFinal = await raspuestaInicial.json()

    return (respuestaFinal)

}

export async function registrarGasto(datosGasto){

    //1. url del servicio
    const URL = "http://localhost:8000/gasto"
    
    //2.configurar peticion
    let peticion = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(datosGasto)
    }

    //3.consumir el api
    let raspuestaInicial = await fetch(URL,peticion)
    let respuestaFinal = await raspuestaInicial.json()

    console.log(respuestaFinal)
}