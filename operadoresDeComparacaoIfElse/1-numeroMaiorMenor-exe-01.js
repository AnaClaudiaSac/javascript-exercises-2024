var readlineSync = require('readline-sync');

// Exercício 1: Comparando Números

// Peça ao usuário que digite dois números (num1 e num2).
// Compare os números usando if e else para determinar:
// Se num1 é maior que num2.
// Se num1 é menor que num2.
// Se num1 é igual a num2.

let num1 = parseInt(readlineSync.question('Digite um numero: '))
let num2 = parseInt(readlineSync.question('Digite um numero: '))



if (num1 < num2 ) {
  console.log (+ num1 +  ' é menor que '  + num2 )
}if (num1 > num2){ 
   console.log(+ num2 +  ' é menor que '  + num1 )
}else if (num1 === num2)
console.log(+ num1 + ' e ' + num2 + ' são iguais')


 

  




