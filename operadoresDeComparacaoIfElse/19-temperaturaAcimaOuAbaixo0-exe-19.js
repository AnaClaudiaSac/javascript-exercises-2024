var readlineSync = require('readline-sync');


//19 - Escreva um programa que pergunte ao usuário a temperatura em Celsius e, 
//em seguida, exiba se está acima ou abaixo de 0 graus Celsius.



let temperatura = parseFloat(readlineSync.question('Digite a temperatura em Celsius: '))

if( temperatura >= 0 ){
  console.log('A temperatura esta acima de 0 graus')
}else{
  console.log('A temperatura está abixo de 0')
}