var number = parseInt(prompt("Digite um número"));
var countEven = 0;
var countOdd = 0;

for(var i = 0; i<=number; i++){
    if((i & 1)==0){
        countEven++;
    }
    else
        countOdd++;
}

alert(`${countEven-1} números pares e ${countOdd} números pares`);
