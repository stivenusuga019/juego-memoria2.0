let intentosJugador = document.querySelector(".intentos");
let nombreJugador = document.querySelector(".Player");
let tiempoJugador = document.querySelector(".tiempo");

//tomar los datos
function tomarDatos() {
    let estadisticas = {
        "nombre":nombreJugador.textContent,
        "intentos":intentosJugador.textContent,
        "tiempo":tiempoJugador.textContent,   
    }
    //console.log(estadisticas)
    guardarDatos(estadisticas);
}
//clave o llave
const DatosJugadores = "Jugadores";
//guardar datos
function guardarDatos(objeto) {
    let Jugadores =[];
    //pasar los datos de texto a objeto
    let datosDelNavegador = localStorage.getItem(DatosJugadores);
    if (datosDelNavegador !== null) {
        Jugadores = JSON.parse(datosDelNavegador);
    }
    Jugadores.push(objeto);
    //pasar los datos a texto
    localStorage.setItem(DatosJugadores,JSON.stringify(Jugadores));
    //alert("Datos Guardados Exitosamente...")
}

//mostrar el ranking de jugador
function mostrarDatos() {
        let Jugadores =[];
        //pasar los datos de texto a objeto
        let datosDelNavegador = localStorage.getItem(DatosJugadores);
        if (datosDelNavegador !== null) {
            Jugadores = JSON.parse(datosDelNavegador);
        }
        let tabla = document.querySelector(".listado-tabla tbody")
    Jugadores.forEach( (element, i)=>{
        let fila = document.createElement("tr");
        fila.innerHTML = `
         <td> ${i}</td>
         <td> ${element.nombre}</td>
         <td> ${element.intentos}</td>
         <td> ${element.tiempo}</td>
        `;
        tabla.appendChild(fila)
        
       
    });
}