// Variables Globales

let ataqueJugador;
let ataqueEnemigo;

let resultadoCombate;

let mascotas = ["Hipodoge", "Capipepo", "Ratigueya"];
let ataques = ["🔥", "💧", "🌱"];

let btnClicked;

function iniciarJuego(){ // Inicio del juego y variables principales
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    const btnFuego = document.getElementById('botonFuego').addEventListener('click', () => {
        btnClicked = 0;
        ataque();
    });
    const btnAgua = document.getElementById('botonAgua').addEventListener('click', () => {
        btnClicked = 1;
        ataque();
    });
    const btnTierra = document.getElementById('botonTierra').addEventListener('click', () => {
        btnClicked = 2;
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

// Logica de combate
function ataque(){

    if (btnClicked == 0){
        ataqueJugador = ataques[btnClicked];
        alert('🔥🔥🔥');
    } 
    else if (btnClicked == 1){
        ataqueJugador = ataques[btnClicked];
        alert('💧💧💧');
    }
    else if (btnClicked == 2){
        ataqueJugador = ataques[btnClicked];
        alert("🌱🌱🌱");
    }

    ataqueAleatorioEnemigo();

}

function ataqueAleatorioEnemigo(){

    let ataqueAleatorio = aleatorio(0,2);
    ataqueEnemigo = ataques[ataqueAleatorio];

    combate();

}

function combate(){

    if (ataqueJugador == ataqueEnemigo){
        resultadoCombate = "Empate";
    }
    else if (
        ataqueJugador == ataques[0] && ataqueEnemigo == ataques[2] ||
        ataqueJugador == ataques[1] && ataqueEnemigo == ataques[0] ||
        ataqueJugador == ataques[2] && ataqueEnemigo == ataques[1]
    ){
        resultadoCombate = "Ganaste 🎊";
    }
    else {
        resultadoCombate = "Perdiste 😢"
    }

    crearMensaje();

}

// Logica Visual extra
function crearMensaje(){

    const seccionMensajes = document.getElementById('mensajes');
    let parrafo = document.createElement('p');
    parrafo.innerHTML = `Tu atacó con ${ataqueJugador}, la mascota del enemigo atacó con ${ataqueEnemigo} - ${resultadoCombate}`;
    seccionMensajes.appendChild(parrafo)

}

function aleatorio(min, max){ // Función aleatoria para casos del rival
    
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

window.addEventListener('load', iniciarJuego);