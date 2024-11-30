var readlineSync = require('readline-sync');


// 25 - Escreva um programa que solicite ao usuário um número de 1 a 7 e, em seguida, 
//exiba o dia da semana correspondente (onde 1 é domingo, 2 é segunda-feira, etc.).

let numDaSemana = parseInt(readlineSync.question('Digite um numero de 1 a 7: '))

if(numDaSemana === 1 ){
  console.log('domingo')
}else if(numDaSemana === 2){
  console.log('segunda-feira')
}else if(numDaSemana === 3){
  console.log('terça-feira')
}else if(numDaSemana === 4){
  console.log('quarta-feira')
}else if(numDaSemana === 5){
  console.log('quinta-feira')
}else if(numDaSemana === 6){
  console.log('sexta-feira')
}else{
 console.log('sábado')
}
