var readlineSync = require('readline-sync');

// 12 - Verificando a idade para votar:

// Escreva um programa que leia o ano de nascimento de uma pessoa e informe se ela pode votar no ano atual. Considere que a idade mínima para votar é 18 anos.

let ano = parseInt(readlineSync.question('Digite o ano do seu nascimento: '))

let idadeAnoAtual = 2024 - ano

if(idadeAnoAtual >= 18) {
  console.log('Pode Votar')
}else{
  console.log('Não pode votar')
}