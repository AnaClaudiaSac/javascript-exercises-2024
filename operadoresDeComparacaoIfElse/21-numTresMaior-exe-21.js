var readlineSync = require('readline-sync');

// 21 - Faça um programa que peça ao usuário para digitar três números 
//e, em seguida, exiba o maior deles.

let numero1 = parseInt(readlineSync.question('Digite o prmeiro numero: '))
let numero2 = parseInt(readlineSync.question('Digite o segundo numero: '))
let numero3 = parseInt(readlineSync.question('Digite o terceiro numero: '))

if(numero1 > numero2){
  console.log(`O número ${numero1} é maior` )
}else if(numero2 > numero3){

  console.log(`O número ${numero2} é maior`)
}else if (numero3 > numero1){
  
  console.log(`O número ${numero3} é maior`)
  
} else{
  console.log('Os numeros são iguais')
}