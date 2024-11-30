var readlineSync = require('readline-sync');

// 14. Jogo da adivinhação:

// Crie um programa que gere um número aleatório entre 1 e 100 e peça ao usuário adivinhá-lo. 
// O programa deve informar se o palpite do usuário é maior, menor ou igual ao número aleatório. 
// O jogo deve continuar até que o usuário acerte o número.

let numUsuario = parseInt(readlineSync.question('Digite um numero entre 1 a 100 e tente adivinhar o numero surpresa: '))

let numAleatorio = Math.random() * (100 - 1) + 1
//let numAleatorio = 32

console.log(Math.round(numAleatorio))

if (numUsuario > numAleatorio){
console.log('O número é maior')
}else if(numUsuario < numAleatorio){
  console.log(' O número é menor')
}else {
  console.log('Você acertou!')
}

// se numero do usuário for maior que o aleatorio ele é maior
// se não se numero do usuário for menor que o aleatorio ele é menor
// se não ele é igual
