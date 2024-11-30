var readlineSync = require('readline-sync');

// Exercício 6: Calculadora Básica

// Crie uma calculadora básica que permita ao usuário realizar as quatro operações matemáticas básicas: adição, subtração, multiplicação e divisão.
// Peça ao usuário que digite dois números (numero1 e numero2) e a operação desejada (operacao).
// Use if e else para realizar a operação matemática correta com base no valor de operacao.

let numero1 = parseFloat(readlineSync.question('Digite um numero: '))
let numero2 = parseFloat(readlineSync.question('Digite outro numero: '))
let operadores = readlineSync.question('Digite a operacao desejada: (+, - ,* ,/, % ): ')

if(operadores === '+' ){
  console.log(`${numero1} + ${numero2} = ${numero1 + numero2}`) 
}else if (operadores === '-'){
  console.log(`${numero1} - ${numero2} = ${numero1 - numero2}`) 
}else if(operadores === '*'){
  console.log(`${numero1} * ${numero2} = ${numero1 * numero2}`) 
}else if(operadores === '/'){
  console.log(`${numero1} / ${numero2} = ${numero1 / numero2}`) 
}else if(operadores === '%'){
   console.log(`${numero1} % ${numero2} = ${numero1 % numero2}`) 
}else {
  console.log('Error')
}
