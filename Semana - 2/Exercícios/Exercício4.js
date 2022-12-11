let soma = 0;
let number;
do 
{
number = parseInt(prompt("Informe um número para somar ou -1 para parar:"));
if(number != -1){
    soma += number;
}
}while(number != -1);

alert(`${soma}`);
