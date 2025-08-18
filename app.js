let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById("amigo").value.trim();

    if (nombreAmigo === "") {
        alert("Por favor, inserta un nombre de amigo.");
    } else {
        amigos.push(nombreAmigo);
        document.getElementById("amigo").value = "";
        console.log(amigos);
        actualizarListaAmigos();
    }
    return amigos;
}

function actualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let amigo = amigos[i];
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    }
}

function sortearAmigos() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];

        let resultadoSorteo = document.getElementById("resultado");
        resultadoSorteo.innerHTML = `<h2>Amigo secreto: ${amigoSorteado}</h2>`;
    }
}