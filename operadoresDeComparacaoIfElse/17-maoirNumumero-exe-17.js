var readlineSync = require('readline-sync');


//17 -Crie um programa que solicite dois números do usuário e exiba qual deles é maior.

let num1 = parseFloat(readlineSync.question('Digite o primeiro numero: '))
let num2 = parseFloat(readlineSync.question('Digite o segundo numero: '))

if(num1 < num2){
  console.log(`O numero ${num1} é menor que o numero ${num2}`)
}else if(num1 > num2){
  console.log(`O numero ${num1} é maior que o numero  ${num2}`)
}else{
  console.log(`Os nmeros ${num1} e numero ${num2} são iguais`)
}