var readlineSync = require('readline-sync');


// 3. Comparação de Datas:

// Crie um programa que receba duas datas do usuário e determine qual data é anterior e qual é posterior.
// Utilize os operadores de comparação para realizar a comparação.
// Exiba as datas e uma mensagem informando qual data é anterior e qual é posterior.



let data1 = new Date(readlineSync.question('Digite uma data A/M/D: '))
let data2 = new Date(readlineSync.question('Digite outra data A/M/D: '))
console.log(data1)


let data1IsBefore = data1 < data2


if (data1IsBefore) {
  console.log('A data' + data1 + 'é anterior')
} else {
  console.log(' A data' + data2 +  'é posterior')
}


 
  

