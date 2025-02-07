// Variables Globales

let ataqueJugador;
let ataqueEnemigo;

let mascotas = ["Hipodoge", "Capipepo", "Ratigueya"];

let btnClicked;

function iniciarJuego(){ // Inicio del juego y variables principales
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    const btnFuego = document.getElementById('botonFuego').addEventListener('click', () => {
        btnClicked = "fuego";
        ataque();
    });
    const btnAgua = document.getElementById('botonAgua').addEventListener('click', () => {
        btnClicked = "agua";
        ataque();
    });
    const btnTierra = document.getElementById('botonTierra').addEventListener('click', () => {
        btnClicked = "tierra";
        ataque();
    });

}

// Selección de personajes
function seleccionarMascotaJugador(){
    const inputHipodoge = document.getElementById('hipodoge');
    const inputCapipepo = document.getElementById('capipepo');
    const inputRatigueya = document.getElementById('ratigueya');

    const spanMascotaJugador = document.getElementById('mascotaJugador');

    if (inputHipodoge.checked){
        alert("Soldado Hipodoge listo para pelear, señor.");
        spanMascotaJugador.innerHTML = 'Hipodoge';
        seleccionarMascotaEnemigo();
    }
    else if (inputCapipepo.checked){
        alert("Oh sii, es mi turno.");
        spanMascotaJugador.innerHTML = 'Capipepo';
        seleccionarMascotaEnemigo();
    }
    else if (inputRatigueya.checked){
        alert("Que se preparen, por que voy con todo.")
        spanMascotaJugador.innerHTML = 'Ratigueya';
        seleccionarMascotaEnemigo();
    }
    else {
        alert("Jugar solo es aburrido. Elige una mascota.")
        return ;
    }
}

function seleccionarMascotaEnemigo(){

    let mascotaEnemigo = aleatorio(0,2)
    const spanMascotaEnemigo = document.getElementById('mascotaEnemigo');
    spanMascotaEnemigo.innerHTML = mascotas[mascotaEnemigo]

}

function ataque(){

    if (btnClicked == "fuego"){
        ataqueJugador = "Fuego";
        alert('🔥🔥🔥');
    } 
    else if (btnClicked == "agua"){
        ataqueJugador = "Agua";
        alert('💧💧💧');
    }
    else if (btnClicked == "tierra"){
        ataqueJugador = "Tierra";
        alert('🌱🌱🌱');
    }
    ataqueAleatorioEnemigo();

}

function ataqueAleatorioEnemigo(){

    let ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1){
        ataqueEnemigo = "Fuego";
        console.log(ataqueEnemigo);        
    }
    else if (ataqueAleatorio == 2){
        ataqueEnemigo = "Agua";
        console.log(ataqueEnemigo);        
    }
    else if (ataqueAleatorio == 3){
        ataqueEnemigo = "Tierra";
        console.log(ataqueEnemigo);        
    }

    crearMensaje();

}

function crearMensaje(){

    const seccionMensajes = document.getElementById('mensajes');
    let parrafo = document.createElement('p');
    parrafo.innerHTML = `Tu atacó con ${ataqueJugador}, la mascota del enemigo atacó con ${ataqueEnemigo} - Pendiente`;
    seccionMensajes.appendChild(parrafo)

}

function aleatorio(min, max){ // Función aleatoria para casos del rival
    
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

window.addEventListener('load', iniciarJuego);