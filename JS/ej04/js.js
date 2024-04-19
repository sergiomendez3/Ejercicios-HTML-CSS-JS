function mostrarHoraEnElementos() {

    let elementosNow = document.querySelectorAll(".now");

    let horaActual = new Date().toLocaleTimeString();

    elementosNow.forEach(function(elemento) {
        elemento.textContent = horaActual;
    });
}

setInterval(mostrarHoraEnElementos, 1000);