var readlineSync = require('readline-sync');
//Exercício 1: Comparando Números Positivos, Negativos ou Zero


// Peça ao usuário que digite um número (numero).
// Use if e else para verificar se o número é:
// Positivo: se o número for maior que 0.
// Negativo: se o número for menor que 0.
// Zero: se o número for igual a 0.

let numero = parseInt(readlineSync.question('Digite um numero: '))

if(numero > 0){
console.log('Numero e Positivo')
}else if(numero < 0){
  console.log('Numero e Negativo')
}else if ( numero == 0){
  console.log('Numero  0')
}

