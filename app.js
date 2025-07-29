// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let arrAmigos = [];
let cambio = false;

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    let soloLetras = /^[a-zA-Z]+$/;

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    if (soloLetras.test(amigo)){
        obtenerAmigo(amigo)
        limpiarInput();
        mostrarAmigos();
    } else {
        alert("Por favor, ingrese un nombre valido");
    }

}

function limpiarInput(){
    let input = document.getElementById("amigo");
    input.value = "";
}

function obtenerAmigo(amigo){
    arrAmigos.push(amigo)
}

function mostrarAmigos(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    arrAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

function sortearAmigo(){
    if (arrAmigos.length == 0) {
        alert("La lista esta vacia");
    } else {
        ganador = arrAmigos[Math.floor(Math.random() * arrAmigos.length)];
        mostrarAmigoSorteado(ganador);
        reset();
    }

}

function mostrarAmigoSorteado(ganador){
    let resultado = document.getElementById("resultado");

    let li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${ganador}`;
    resultado.appendChild(li);
}

function reset(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    arrAmigos = [];
}
