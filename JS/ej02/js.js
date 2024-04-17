let colores = ["red", "green", "blue", "orange", "yellow"];

let indiceColor = 0;

function cambiarColor() {
    let contenido = document.getElementById("contenido");

    contenido.style.backgroundColor = colores[indiceColor];

    indiceColor = (indiceColor + 1) % colores.length;
}

setInterval(cambiarColor, 1000);