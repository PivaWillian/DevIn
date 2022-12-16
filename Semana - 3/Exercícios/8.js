const uneDobraRetorna = (arr, ...numbers) => {
    numbers.forEach((valor, índice, vetor) => {
        vetor[índice] *= 2;
    });
    const retorno = [...arr, numbers];
    return retorno;
}

const r1 = uneDobraRetorna([1, 2, 3], 4, 4);
const r2 = uneDobraRetorna([2], 10, 4, 8);
const r3 = uneDobraRetorna([6, 8]);

console.log(`${r1}\n${r2}\n${r3}`);

