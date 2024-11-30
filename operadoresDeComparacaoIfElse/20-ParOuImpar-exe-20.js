var readlineSync = require('readline-sync');

//20 - Crie um programa que solicite ao usuário um número e determine se é par ou ímpar.

let numero = parseInt(readlineSync.question('digite um numero inteiro: '))

if(numero % 2 === 0 ){
  console.log('O numero é par')
}else{
  console.log('O numero é impar')
}