var primos = 2;

for(var i = 4; i <= 1000; i++ ){
    var primo = true;

    for(var j = 2; j <= i/2; j++){
        if(i%j === 0){
            primo = false
            continue;
        }
    }

    if(primo){
        primos += 1;
        console.log(i);
    }
}

console.log(`A quantidade de números primos é: ${primos}`);
