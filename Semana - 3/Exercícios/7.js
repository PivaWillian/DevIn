const pessoa = {
    nome: 'Ada',
    idade: 36,
    profissao: 'matemática'
};
  
const destruidora = ({ nome, idade, profissao }) => {
    // const { nome, idade, profissao } = obj;
    return `Esta é ${nome}, tem ${idade} anos e é ${profissao}`;
}

console.log(destruidora(pessoa));