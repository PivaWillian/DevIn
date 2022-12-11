var operation = prompt("Qual operação deseja realizar? ('+', '-', '*' ou '/'");
var firstNumber = parseFloat(prompt("Primeiro número: "));
var secondNumber = parseFloat(prompt("Segundo número: "));

switch (operation) {
    case '+':
        alert(`Resultado: ${firstNumber + secondNumber}`);
        break;
    case '-':
        alert(`Resultado: ${firstNumber - secondNumber}`);
        break;
    case '*':
        alert(`Resultado: ${firstNumber * secondNumber}`);
        break;
    case '/':
        alert(`Resultado: ${firstNumber / secondNumber}`);
        break;
    default:
        alert('Números Inválidos');
        break;
}