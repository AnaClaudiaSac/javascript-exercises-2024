var readlineSync = require('readline-sync');

//Exercício 8: Classificando Triângulo

// Peça ao usuário que digite os comprimentos dos três lados de um triângulo (lado1, lado2 e lado3).
// Use if e else para classificar o triângulo em:
// Equilátero: se os três lados têm o mesmo comprimento.
// Isósceles: se dois lados têm o mesmo comprimento.
// Escaleno: se todos os lados têm comprimentos diferentes.
// Não é um triângulo: se a soma de quaisquer dois lados for menor que o terceiro lado.

let lado1 = parseFloat(readlineSync.question('Digite o primeiro do triangulo: '))
let lado2 = parseFloat(readlineSync.question('Digite segundo lado do triangulo: '))
let lado3 = parseFloat(readlineSync.question('Digite o terceiro lado do triangulo: '))

if(lado1 === lado2  && lado1 === lado3){
  console.log('O triangulo é Equilatero')
}else if(lado1 === lado2 || lado2 === lado3 || lado3 === lado1){   
  console.log('O triangulo é Isósceles')
}else if (lado1 !== lado2  ||  lado2 !== lado3 || lado3 !== lado1){
  console.log('O triangulo é Escaleno')
}

if(lado1 + lado2 < lado3 || lado1 + lado3 < lado2 || lado2 + lado3 < lado1){
  console.log("Não é um Triangulo")
}


  




