/*
    OPERADORES LÓGICOS

    &&  "E" As duas condições devem ser verdadeiras
        para que a condição final seja verdadeira.
    
    ||  "OU" Uma das condições devem ser verdadeira
        para que a condição final seja verdadeira.

    !   "NÃO" Nega uma condição
*/

/*
console.log(5 == 5 && 6 == 6); // true
console.log(5 == 5 && 6 != 6); // false

console.log(5 == 5 || 6 == 6); // true
console.log(5 == 5 || 6 != 6); // true

console.log(!(5 > 6)); // true
console.log(!(5 < 6)); // false
*/

// DESAFIO 2
const idade = 16;
// Verificar se a pessoa é maior igual a 18 se sim, deixar entrar, se não, bloquear entrada
if (!(idade >= 18) || idade === 17) {
    console.log('Bloquear a entrada');
} else {
    console.log('Deixar entrar');
}