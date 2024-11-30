var readlineSync = require('readline-sync');

// Exercício 5: Verificando Par e Ímpar

// Peça ao usuário que digite um número (numero).
// Use o operador % para verificar se o número é par ou ímpar.

let numero = parseFloat(readlineSync.question('Digite um numero: '))

if(numero % 2 == 0 ){
  console.log('O numero é Par')

}else
  console.log('O numero é impar')
