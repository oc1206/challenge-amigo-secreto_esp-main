let amigos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById(addfriend).value;

    if (nombreAmigo === null) {
        alert("Por favor, inserta un nombre de amigo.");
    } else if (nombreAmigo === "") {
        alert("Por favor, inserta un nombre de amigo.");
    } else {
        amigos.push(nombreAmigo);
        document.getElementById(addfriend).value = "";
    }
    return amigos;
}