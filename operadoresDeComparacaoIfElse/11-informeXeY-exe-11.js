
var readlineSync = require('readline-sync');


// 11 - Peça ao usuário:
// Entrada: Informe o valor de X:
// Entrada: Informe o valor de Y:
// Compare X e Y usando instruções 'if else':
// Se X for maior que Y:
// Exiba: "X é maior que Y!"
// Se X for menor que Y:
// Exiba: "Y é maior que X!"
// Se X for igual a Y:
// Exiba: "X e Y são iguais!"


let x = parseInt(readlineSync.question('Digite um numero para o X: '))
let y = parseInt(readlineSync.question('Digite umnumero para Y: '))

if(x > y){
  console.log('X é maior que Y')
}else if(x < y){
  console.log('Y é maior que X')
}else if(x === y){
console.log('X e Y são iguais')
}else{
  console.log('Erro ao digitar')
}
  