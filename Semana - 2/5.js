var operation;
var firstNumber;
var secondNumber;
var options = "Qual operação deseja realizar:\n" 
+ " '+' para soma\n '-' para subtração\n"
+ " '*' para multiplicação\n"
+ " '/' para divisão";

var operation = prompt(options);
var firstNumber = parseInt(prompt("Por favor insira o primeiro número:"));
var secondNumber = parseInt(prompt("Por favor insira o segundo número:"));

function Soma(num1, num2) {
    return num1 + num2;
}

switch (operation) {
    case '+':
        alert(Soma(firstNumber, secondNumber));
        break;
    case '-':
        Subtração();
        break;
    case '*':
        Multiplicação();
        break;
    case '/':
        Divisão();
        break;
    default:
        break;
};

