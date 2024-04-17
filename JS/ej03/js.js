function mostrarHora() {

    let contenido = document.getElementById("contenido");

    let horaActual = new Date().toLocaleTimeString();

    contenido.textContent = horaActual;
}

setInterval(mostrarHora, 1000);