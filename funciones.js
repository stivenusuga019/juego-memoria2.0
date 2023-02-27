document.addEventListener("DOMContentLoaded",function () {
    mostrarDatos();
    mostrarVentaJUgador();
})
//declarar variables globales
let imagenes = [
    {
        nombre:"Broly",
        ruta:"imagenes/Broly_DBSuper.jpg"
    },
    {
        nombre:"goku",
        ruta:"imagenes/goku.jpg"
    },
    {
        nombre:"Hit",
        ruta:"imagenes/Hit.jpg"
    },
    {
        nombre:"jiren",
        ruta:"imagenes/jiren.jpg"
    },
    {
        nombre:"kefla",
        ruta:"imagenes/kefla.jpg"
    },
    {
        nombre:"vegeta",
        ruta:"imagenes/vegeta.jpg"
    }, 
    {
        nombre:"Broly",
        ruta:"imagenes/Broly_DBSuper.jpg"
    },
    {
        nombre:"goku",
        ruta:"imagenes/goku.jpg"
    },
    {
        nombre:"Hit",
        ruta:"imagenes/Hit.jpg"
    },
    {
        nombre:"jiren",
        ruta:"imagenes/jiren.jpg"
    },
    {
        nombre:"kefla",
        ruta:"imagenes/kefla.jpg"
    },
    {
        nombre:"vegeta",
        ruta:"imagenes/vegeta.jpg"
    }
]
let imagenes_2 = [
    {
        nombre:"Broly",
        ruta:"imagenes/Broly_DBSuper.jpg"
    },
    {
        nombre:"goku",
        ruta:"imagenes/goku.jpg"
    },
    {
        nombre:"Hit",
        ruta:"imagenes/Hit.jpg"
    },
    {
        nombre:"jiren",
        ruta:"imagenes/jiren.jpg"
    },
    {
        nombre:"kefla",
        ruta:"imagenes/kefla.jpg"
    },
    {
        nombre:"vegeta",
        ruta:"imagenes/vegeta.jpg"
    },
    {
        nombre:"Bills",
        ruta:"imagenes/Bills.jpg"
    },{
        nombre:"Roshi",
        ruta:"imagenes/Maestro Roshi.jpg"
    }, 
    {
        nombre:"Broly",
        ruta:"imagenes/Broly_DBSuper.jpg"
    },
     {
        nombre:"Bills",
        ruta:"imagenes/Bills.jpg"
    },
    {
        nombre:"goku",
        ruta:"imagenes/goku.jpg"
    },
    {
        nombre:"Hit",
        ruta:"imagenes/Hit.jpg"
    },
    {
        nombre:"jiren",
        ruta:"imagenes/jiren.jpg"
    },
    {
        nombre:"kefla",
        ruta:"imagenes/kefla.jpg"
    },
    {
        nombre:"vegeta",
        ruta:"imagenes/vegeta.jpg"
    },{
        nombre:"Roshi",
        ruta:"imagenes/Maestro Roshi.jpg"
    }
]
let imagenes_3 = [
    {
        nombre:"Broly",
        ruta:"imagenes/Broly_DBSuper.jpg"
    },
    {
        nombre:"goku",
        ruta:"imagenes/goku.jpg"
    },
    {
        nombre:"Hit",
        ruta:"imagenes/Hit.jpg"
    },
    {
        nombre:"jiren",
        ruta:"imagenes/jiren.jpg"
    },
    {
        nombre:"kefla",
        ruta:"imagenes/kefla.jpg"
    },
    {
        nombre:"vegeta",
        ruta:"imagenes/vegeta.jpg"
    },
    {
        nombre:"Bills",
        ruta:"imagenes/Bills.jpg"
    },
    {
        nombre:"Roshi",
        ruta:"imagenes/Maestro Roshi.jpg"
    },{
        nombre:"androide",
        ruta:"imagenes/androide-18.jpg"
    },
    {
        nombre:"piccolo",
        ruta:"imagenes/piccolo.jpg"
    }, 
    {
        nombre:"Broly",
        ruta:"imagenes/Broly_DBSuper.jpg"
    },
     {
        nombre:"Bills",
        ruta:"imagenes/Bills.jpg"
    },
    {
        nombre:"goku",
        ruta:"imagenes/goku.jpg"
    },
    {
        nombre:"Hit",
        ruta:"imagenes/Hit.jpg"
    },
    {
        nombre:"jiren",
        ruta:"imagenes/jiren.jpg"
    },
    {
        nombre:"kefla",
        ruta:"imagenes/kefla.jpg"
    },
    {
        nombre:"vegeta",
        ruta:"imagenes/vegeta.jpg"
    },{
        nombre:"Roshi",
        ruta:"imagenes/Maestro Roshi.jpg"
    },{
        nombre:"androide",
        ruta:"imagenes/androide-18.jpg"
    },{
        nombre:"piccolo",
        ruta:"imagenes/piccolo.jpg"
    }
]
// seleccionar tablero donde iran las imagenes
let tablero = document.querySelector(".tablero");
//variables para guardar los datos de la imagen escogida
let imgEscogidaID = [];
let imgEscogidaNombre = [];
let contador = document.querySelector(".aciertos")
let fallos = document.querySelector(".fallos") 
let intentos = document.querySelector(".intentos") 
let acierto = 0;
let intentos1 = 15;
let tiempo = 60;
let nivel = 1;
let estoyjugando  = false;
let mostrarNivel = document.querySelector(".nivel")
let mostrarTiempo = document.querySelector(".tiempo")
let btnIniciar = document.querySelector(".iniciar")
let segundos ;
//variables de sonido
let seleccionar = new Audio("sonidos/selccionar.mp3");
let levelWin = new Audio("sonidos/level-win.mp3");
let fallo = new Audio("sonidos/fallo.mp3");
let success = new Audio("sonidos/success.mp3");

//evento para iniciar el juego
btnIniciar.addEventListener("click",function () {
 if (estoyjugando == false && nivel == 1) {
    imagenes.sort(()=>Math.random= -0.5);
    estoyjugando = true;
    nivel_1();
 }else if (estoyjugando == false && nivel == 2){
    imagenes_2.sort(()=>Math.random= -0.5);
    estoyjugando = true;
    nivel_2();
 }else if (estoyjugando == false && nivel == 3){
    imagenes_3.sort(()=>Math.random= -0.5);
    estoyjugando = true;
    nivel_3();
 }
})

// funcion papra agregar las imagenes al tablero
function agregarImagenes() {
    if (nivel == 1) {
        for (let i = 0; i < imagenes.length; i++) {
        let img = document.createElement("img");
        let div = document.createElement("div");
        div.setAttribute("class","col-3 border");
        img.setAttribute("class","img-fluid");
        img.setAttribute("src","imagenes/universo8.jpg");
        img.setAttribute("id",i);
        img.addEventListener("click",descubrirImagen);
        div.appendChild(img);
        tablero.appendChild(div);

       } 
    }else if( nivel == 2){
        for (let i = 0; i < imagenes_2.length; i++) {
            let img = document.createElement("img");
            let div = document.createElement("div");
            div.classList.add("class","col-3", "border");
            img.setAttribute("class","img-fluid");
            img.setAttribute("src","imagenes/universo8.jpg");
            img.setAttribute("id",i);
            img.setAttribute("width","200px");
            img.addEventListener("click", descubrirImagen);
            div.appendChild(img);
            tablero.appendChild(div);
        }
    }else if( nivel == 3){
        for (let i = 0; i < imagenes_3.length; i++) {
            let img = document.createElement("img");
            let div = document.createElement("div");
            div.classList.add("class","col-3", "border");
            img.setAttribute("class","img-fluid");
            img.setAttribute("src","imagenes/universo8.jpg");
            img.setAttribute("id",i);
            img.setAttribute("width","200px");
            img.addEventListener("click", descubrirImagen);
            div.appendChild(img);
            tablero.appendChild(div);
        }
    }
     
}

function quitarImagenes() {
    let ImagenesTablero = document.querySelectorAll(".tablero > div")
    for (let i = 0; i < ImagenesTablero.length; i++) {
        ImagenesTablero[i].remove();

    }
}


//funcion para descubrir imagenes
function descubrirImagen() {
    if (nivel == 1) {
        let imgID = this.getAttribute("id")
    //alert("imagen #"+imgID)
        this.setAttribute("src",imagenes[imgID].ruta)
        //guardar ID
        imgEscogidaID.push(imgID);
        //guardar nombre
        imgEscogidaNombre.push(imagenes[imgID].nombre);
        //alert(imgEscogidaID[0] +" "+ imgEscogidaNombre[0])
        if ( imgEscogidaNombre.length == 2 ) {
            setTimeout(compararImagenes,300)   
        }
    }else if (nivel == 2) {
        let imgID = this.getAttribute("id")
    //alert("imagen #"+imgID)
        this.setAttribute("src",imagenes_2[imgID].ruta)
        //guardar ID
        imgEscogidaID.push(imgID);
        //guardar nombre
        imgEscogidaNombre.push(imagenes_2[imgID].nombre);
        if ( imgEscogidaNombre.length === 2 ) {
            setTimeout(compararImagenes,300);       
        }
    }else if (nivel == 3) {
        let imgID = this.getAttribute("id")
    //alert("imagen #"+imgID)
        this.setAttribute("src",imagenes_3[imgID].ruta)
        //guardar ID
        imgEscogidaID.push(imgID);
        //guardar nombre
        imgEscogidaNombre.push(imagenes_3[imgID].nombre);
        if ( imgEscogidaNombre.length === 2 ) {
            setTimeout(compararImagenes,300);       
        }
    } 
}

//funcion para comparar imagenes
function compararImagenes() {
    //seleccionar todas las imagenes del tablero
    let TodasImagenes = document.querySelectorAll(".tablero > div > img");
    //comparar las imagenes escogidas

    if ( imgEscogidaNombre[0] == imgEscogidaNombre[1]) { 
        seleccionar.play();
        if (imgEscogidaID[0] == imgEscogidaID[1]) {
            alert("Escoja otra casilla diferente")
            TodasImagenes[imgEscogidaID[0]].setAttribute("src","imagenes/universo8.jpg");
            TodasImagenes[imgEscogidaID[1]].setAttribute("src","imagenes/universo8.jpg");
            fallo.play();
        }else{
            //alert("Son iguales");
            TodasImagenes[imgEscogidaID[0]].setAttribute("src","imagenes/acierto.jpg");
            TodasImagenes[imgEscogidaID[1]].setAttribute("src","imagenes/acierto.jpg");
            TodasImagenes[imgEscogidaID[0]].removeEventListener("click",descubrirImagen,false);
            TodasImagenes[imgEscogidaID[1]].removeEventListener("click",descubrirImagen,false);
            acierto++
            contador.textContent = acierto;
            success.play();
            
        }
        
      
    }else{
        //alert("No son Iguales");
        TodasImagenes[imgEscogidaID[0]].setAttribute("src","imagenes/universo8.jpg");
        TodasImagenes[imgEscogidaID[1]].setAttribute("src","imagenes/universo8.jpg")
        intentos1--
        intentos.textContent = intentos1;
        fallo.play();
       
        if (intentos1 == 0) {
            let div_perdiste = document.querySelector('#perdiste');           
            div_perdiste.classList.add('loader2') 
            div_perdiste.style.display = "block"
            setTimeout(function () {
                div_perdiste.style.display = "none"
                
            },3000)
            
        }
    }
  
    //reiniciar la variable
    imgEscogidaNombre = [];
    imgEscogidaID = [];
    
    if ( acierto == 6 && nivel == 1  ) {
        levelWin.play();
        let div_ganaste = document.querySelector('#ganaste');
        div_ganaste.classList.add('loader') 
        div_ganaste.style.display = "block"
        clearInterval(segundos)
        acierto = 0;
        intentos1 = 15;
        tiempo = 60;
        nivel++;
        estoyjugando = false;
        contador.textContent = acierto;
        intentos.textContent = intentos1;
        tiempo.textContent = tiempo;
        mostrarNivel.textContent = nivel;
        quitarImagenes(); 
        setTimeout(function () {
            div_ganaste.style.display = "none"
     },3000)
 }else if (acierto == 8 && nivel == 2){
    levelWin.play();
    let div_ganaste = document.querySelector('#ganaste');
        div_ganaste.classList.add('loader') 
        div_ganaste.style.display = "block"
        clearInterval(segundos)
        acierto = 0;
        intentos1 = 12;
        tiempo = 40;
        nivel++;
        estoyjugando = false;
        contador.textContent = acierto;
        intentos.textContent = intentos1;
        tiempo.textContent = tiempo;
        mostrarNivel.textContent = nivel;
        quitarImagenes(); 
        setTimeout(function () {
            div_ganaste.style.display = "none"
     },3000)
 }
 else if (acierto == 10 && nivel == 3){
    levelWin.play();
    let div_ganaste = document.querySelector('#ganaste1');
        div_ganaste.classList.add('loader') 
        div_ganaste.style.display = "block"
        clearInterval(segundos)
        acierto = 0;
        intentos1 = 10;
        tiempo = 30;
        nivel++;
        estoyjugando = false;
        contador.textContent = acierto;
        intentos.textContent = intentos1;
        tiempo.textContent = tiempo;
        mostrarNivel.textContent = nivel;
        quitarImagenes(); 
        tomarDatos();
        setTimeout(function () {
            div_ganaste.style.display = "none"
            location.reload();
     },3000)
 }
   
}
//Niveles
function nivel_1() {
    agregarImagenes();
    mostrarNivel.textContent = nivel;
    segundos = setInterval(function () {
        tiempo--;
        mostrarTiempo.textContent = tiempo;
        if (tiempo == 10) {
           mostrarTiempo.style.color ="red"
           mostrarTiempo.style.fontSize ="30px"
        }
        if (tiempo == 0 || intentos1 == 0) {
            clearInterval(segundos);
            let div_perdiste = document.querySelector('#perdiste');           
            div_perdiste.classList.add('loader2') 
            div_perdiste.style.display = "block"
            setTimeout(function () {
                div_perdiste.style.display = "none"
            },3000)
           
        }

    },1000)
}
function nivel_2() {
    agregarImagenes();
    mostrarNivel.textContent = nivel;
    segundos = setInterval(function () {
        tiempo--;
        mostrarTiempo.textContent = tiempo;
        if (tiempo == 10) {
           mostrarTiempo.style.color ="red"
           mostrarTiempo.style.fontSize ="30px"
        }
        if (tiempo == 0 || intentos1 == 0) {
            clearInterval(segundos);
            let div_perdiste = document.querySelector('#perdiste');           
            div_perdiste.classList.add('loader2') 
            div_perdiste.style.display = "block"
            setTimeout(function () {
                div_perdiste.style.display = "none"
            },3000)
           
        }

    },1000)
}
function nivel_3() {
    agregarImagenes();
    mostrarNivel.textContent = nivel;
    segundos = setInterval(function () {
        tiempo--;
        mostrarTiempo.textContent = tiempo;
        if (tiempo == 10) {
           mostrarTiempo.style.color ="red"
           mostrarTiempo.style.fontSize ="30px"
        }
        if (tiempo == 0 || intentos1 == 0) {
            tomarDatos();
            clearInterval(segundos);
            let div_perdiste = document.querySelector('#perdiste');           
            div_perdiste.classList.add('loader2') 
            div_perdiste.style.display = "block"
            setTimeout(function () {
                div_perdiste.style.display = "none"
            },3000)
           
        }

    },1000)
}

//Fincion Parta MOstrar Ventana Del Nombre DEl Jugador
function mostrarVentaJUgador() {
    let mostrarModal= document.querySelector(".modalNombre");
    let cerrarModal = document.querySelectorAll(".cerrar");
    mostrarModal.classList.add("show");
    mostrarModal.style.display = "block";
    for (let index = 0; index < cerrarModal.length; index++) {
        cerrarModal[index].addEventListener("click",function() {
            mostrarModal.classList.remove("show");
            mostrarModal.style.display = "none";
        });     
    }
    namePlayer();
}
//funcion tomar nombre jugador
function namePlayer() {
    let mostrarModal= document.querySelector(".modalNombre");
    let mostrarJugador = document.querySelector(".Player");
    let btn_registrarJ = document.querySelector(".registrar");
    btn_registrarJ.addEventListener("click",function () {
        let jugadorN = document.querySelector(".nombreJ");
        mostrarJugador.textContent = jugadorN.value;
        mostrarModal.classList.remove("show");
        mostrarModal.style.display = "none";
    })
}
