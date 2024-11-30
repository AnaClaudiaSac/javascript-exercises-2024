var readlineSync = require('readline-sync');

//Exercício 2: Comparando idades

// Peça ao usuário que digite sua idade (idade).
// Use if e else para classificar a idade do usuário em:
// Criança: se a idade for menor que 18 anos.
// Adulto: se a idade for entre 18 e 65 anos.
// Idoso: se a idade for maior ou igual a 65 anos.

let idade = parseInt(readlineSync.question('Digite sua idade: '))

if (idade < 18){
  console.log ('Criança')
}else if( idade >= 18 && idade <= 65){
  console.log('Adulto')        
}else if (idade >= 65){           
  console.log('Idoso')
}