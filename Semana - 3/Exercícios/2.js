const mensagemOla = nome => `Olá, ${nome}`;

const print = () => {
    const name = document.getElementById("input").value;
    document.getElementById("output").innerHTML = mensagemOla(name);
}