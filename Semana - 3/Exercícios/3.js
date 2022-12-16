const concatena = (a, b) => {
    const resultado = [...a, ...b];
    return resultado;
}
const arr1 = [0, 1, 2, 3];
const arr2 = [4, 5, 6, 7];


console.log(concatena(arr1, arr2));