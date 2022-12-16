const concatena = (a, b) => {
    const resultado = { ...a, ...b };
    return resultado;
}
const obj1 = {0:'a', 1:'b', 2:'c', 3:'d'};
const obj2 = { 4:'e', 5:'f', 6:'g', 7:'h'};


console.log(concatena(obj1, obj2));