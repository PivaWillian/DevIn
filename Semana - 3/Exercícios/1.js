let matriz = [4, 5, 6, 7, 9, 10, 5 , 3, 5, 1];


let SearchMinMax = (arr) => {
    if(arr === null || arr.length === 0){
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