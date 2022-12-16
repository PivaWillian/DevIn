const somaTudo = (...arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++){
        total += arr[i];
    }
    return total;
}

const resultado = somaTudo(1, 4, 5, 6, 7, 6, 4, 2);
console.log(resultado);