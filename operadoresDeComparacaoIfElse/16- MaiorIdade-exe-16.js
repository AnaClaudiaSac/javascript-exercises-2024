var readlineSync = require('readline-sync');

//16 - Escreva um programa que pergunte ao usuário sua idade e, 
//em seguida, determine se ele é maior de idade (idade maior ou igual a 18) ou menor de idade.


let idade = parseInt(readlineSync.question('Digite sua idade: '))

if(idade >= 18){
  console.log('Maior de idade')
  
}else{
   console.log('Menor de idade')
}