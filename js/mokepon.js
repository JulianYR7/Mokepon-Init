// Variables

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota');
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
}

function seleccionarMascotaJugador() {
    const inputHipodoge = document.getElementById('hipodoge');
    const inputCapipepo = document.getElementById('capipepo');
    const inputRatigueya = document.getElementById('ratigueya');

    if (inputHipodoge.checked){
        alert("Hipodoge listo para pelear.");
    }
    else if (inputCapipepo.checked){
        alert("Oh sii, es mi turno.");
    }
    else if (inputRatigueya.checked){
        alert("Preparate, por que voy con todo.")
    }
    else {
        alert("Jugar solo es aburrido. Elige una mascota.")
        return ;
    }
}

window.addEventListener('load', iniciarJuego);