var readlineSync = require('readline-sync');

//18- Faça um programa que peça ao usuário para digitar um número e verifique se é positivo, negativo ou zero.

let numero = parseFloat(readlineSync.question('Digite um numero: '))

if(numero > 0 ){
  console.log('O numero é positivo')
}else if( numero < 0){
  console.log('O numero é negativo')
}else{
  console.log('O numero é zero')
}
  
