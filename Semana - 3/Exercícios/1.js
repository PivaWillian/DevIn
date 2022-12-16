let matriz = [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47];


function SearchMinMax(arr){
    if(arr === null || arr === undefined){
        return "Não é possível encontrar.";
    }else 
        return `O menor é ${arr[0]};\nO maior é ${arr[arr.length - 1]}`;
}

function numberCompare(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    }
    else {
        return 0;
    }
}

matriz.sort(numberCompare);

console.log(SearchMinMax(matriz));



function Ola(name){
    console.log(`Olá ${name}`);
}

Ola("Willian");

globalThis;

var arr = [6, 5, 4, 3, 2, 1, 0];
arr.forEach(function(a, b, c){
    console.log(c);
})