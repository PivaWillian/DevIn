var valor = parseInt(prompt("Informe o valor inicial: "));
var raiz = parseInt(prompt("Informe a raiz: "));
var resposta = `P. A. = ${valor}, `;
for (let i = 0; i < 10; i++) {
    resposta+= `${valor+raiz}, `;
    valor += raiz;
}

alert(resposta);