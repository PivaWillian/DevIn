const botao = document.getElementById('botao');
botao.addEventListener('click', ()=> document.body.style.background = 'blue');

function cliqueBotao(){
    const titulo = document.getElementById('titulo');
    titulo.style.color = 'red';
}

const botao1 = document.createElement('button');
botao1.innerText = 'Botão 2';
botao1.onclick = cliqueBotao;
document.body.appendChild(botao1);

//funcao simulando busca de cep
const buscaCep = (event) =>{
    console.log(event);
}

//usar preventDefault em forms