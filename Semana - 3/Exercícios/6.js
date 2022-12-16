const verificaPalindromo = (word) => {
    const inverseWord = word.split('').reverse().join('');
    if (inverseWord === word)
        return true;
    return false;
}

console.log(verificaPalindromo("osso"));
console.log(verificaPalindromo("carrasco"));
