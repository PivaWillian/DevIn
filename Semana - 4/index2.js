//get by tags
const título = document.getElementsByTagName("h1");
console.log(título);
título[0].innerText = "New Text";

//get by id
const titulo = document.getElementById("título");
titulo.style.color = 'pink';
titulo.style.backgroundColor = 'black';

//createElemente permite criar qualquer elemento que pode ser criado normalmente em html

const para = document.createElement('p');
para.innerText = "Oi eu sou um parágrafo.";
para.style.color = "black";
para.setAttribute('src', 'https//:google.com'); 

//adiciona o elemento criado como uma criança do body
//também posso adicionar a um elemento específico
document.body.appendChild(para);

//adicionar elemento dentro de outro