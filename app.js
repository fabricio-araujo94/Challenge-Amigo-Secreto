//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let nome = document.querySelector("#amigo").value;

    if (nome.isEmpty) {
        alert("Por favor, insira um nome.");
        return;
    };

    amigos.push(nome);
    document.querySelector("#amigo").value = "";
    listarAmigos();
}

function listarAmigos() {
    let lista = document.querySelector("#listaAmigos");

    lista.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}
