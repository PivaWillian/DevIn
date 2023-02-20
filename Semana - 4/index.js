const números = [0, 2, 5, 6, 7, 5, 23, 5];
console.log("Tamanho do array = ", números.length);
números.push(60);
console.log(números.length);
console.log(números.pop(), números.length);
console.table(números);

const triple = números.map((elemento) => elemento * 3);
console.log(triple);

//Manipulação de Arrays

 //length é um método de array que retorna a quantidade de elementos
 //push adiciona um elemento ao final do array
 //pop retira o último elemento do array
 //shift retira o primeiro elemento
 //unshift adiciona um elemento na primeira posição
 //console.table representa a saída em forma de tabela
 //slice utilizado para "cortar" o array
 //splice serve para deletar e/ou adicionar itens, modificando o array original
 //forEach tipo diferente de loop
 //map, permite agir sobre cada elemento de uma matriz **
 //find => encontra o primeiro elemento de acordo com o filtro
 //some => retorna true ou false caso exista algo com o filtro
 //every => retorna true caso todos os elementos conrespondam ao filtro
 //reduce, executa uma função em todos os elementos do array e retorna os elementos reduzidos

 /* Manipulação de objetos

 delete => utilizado para deletar chaves do objeto.
 keys => retorna um array das chaves existentes.
 entries => retorna um array chave/valor.*/

