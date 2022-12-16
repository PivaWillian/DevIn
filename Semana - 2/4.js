var countOdds = 0;
var countEven = 0;
var entry;

while (true) {
    entry = parseInt(prompt("Por favor entre um número:"));
    if (!isNaN(entry))
        break;
}

for (let index = 0; index <= entry; index++) {
    if (index % 2 == 0)
        countEven++;
    else
        countOdds++;
}

alert(`A quantidade de ímpares é ${countOdds}\n
A quantidade de pares é: ${countEven - 1}`);