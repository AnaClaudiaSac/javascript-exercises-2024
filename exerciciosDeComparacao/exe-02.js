var readlineSync = require('readline-sync');

// 2. Cálculo de Média:

// Crie um programa que receba as notas de três provas de um aluno e calcule a média.
// Utilize os operadores de comparação para verificar se o aluno foi aprovado ou reprovado, considerando a média mínima para aprovação como 7.
// Exiba a média do aluno e uma mensagem informando se ele foi aprovado ou reprovado.
//-----------//--------------------------------------------------------------------------
let nota1 = parseFloat(readlineSync.question('Digite a primeira nota: '))
let nota2 = parseFloat(readlineSync.question('Digite a segunda nota: '))
let nota3 = parseFloat(readlineSync.question('Digire a terceira nota: '))

let resulNota = (nota1 + nota2 + nota3) / 3 
console.log(resulNota.toFixed(2))


if(resulNota >= 7) {
  console.log('Aluno Aprovado')
}else{
  console.log('Aluno Reprovado')
}


