// Variables Globales

let ataqueJugador;
let ataqueEnemigo;

let btnFuegoClick = false;
let btnAguaClick = false;
let btnTierraClick = false;

function iniciarJuego(){ // Inicio del juego y variables principales
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);

    const btnFuego = document.getElementById('botonFuego').addEventListener('click', ataque, () => {
        btnFuegoClick = true;
    });
    const btnAgua = document.getElementById('botonAgua').addEventListener('click', ataque, () => {
        btnAguaClick = true;
    });
    const btnTierra = document.getElementById('botonTierra').addEventListener('click', ataque, () => {
        btnTierraClick = true;
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

    const mascotaEnemigo = aleatorio(1,3)
    const spanMascotaEnemigo = document.getElementById('mascotaEnemigo');

    if (mascotaEnemigo == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge';
    }
    else if (mascotaEnemigo == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo';
    }
    else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya';
    }
}

function ataque(){

    if (btnFuegoClick === true){
        ataqueJugador = "Fuego";
        alert('Funciona!!!!!!')
    }
    else if (btnAguaClick === true){
        ataqueJugador = "Agua";
        alert('Funciona!!!!!!')
    }
    else {
        ataqueJugador = "Tierra";
        alert('Funciona!!!!!!')
    }

}

function aleatorio(min, max){ // Función aleatoria para casos del rival
    
    Math.floor(Math.random() * (max - min + 1) - min);

}

window.addEventListener('load', iniciarJuego);