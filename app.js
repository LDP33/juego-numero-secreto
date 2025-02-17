let numeroSecreto = 0;
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function condicionesIniciales() {
    asignarTextoElemento("h1","Juego de adivinanza");
    asignarTextoElemento("p","Indica un número del 1 al 10.");
    numeroSecreto = generarNumeroSecreto();
    intentos = 1
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto);
    console.log(numeroSecreto == numeroDeUsuario);
    if (numeroSecreto === numeroDeUsuario) {
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}!`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento("p","El número secreto es mayor");
    } else { asignarTextoElemento("p","El número secreto es menor");}    
    } 
    intentos++;
    limpiarCaja();
} 

function limpiarCaja() {
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p","Ya se sortearon todos los numeros posibles.")
        } else {
            if (numerosSorteados.includes(numeroGenerado)) {
                return generarNumeroSecreto();
            }  else {
                numerosSorteados.push(numeroGenerado);
                return numeroGenerado;
                }
    }  
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();
console.log("hola mundo");