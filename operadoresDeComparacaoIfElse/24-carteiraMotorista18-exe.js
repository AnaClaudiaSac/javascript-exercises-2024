var readlineSync = require('readline-sync');

// 24- Faça um programa que pergunte ao usuário sua idade e se ele possui carteira de motorista. 
//Se ele tiver 18 anos ou mais e possuir carteira de motorista, exiba "Você pode dirigir", caso contrário, exiba 
//"Você não pode dirigir".

let idade = parseInt(readlineSync.question('digite sua idade: '))
let temcarteiraMotorista = (readlineSync.question("Voce possui carteira de motorista? ('Digite 'sim' ou 'nao'): "))


if (idade >= 18 && temcarteiraMotorista.toLowerCase() === 'sim'){
  console.log("Você pode dirigir.");
} else {
  console.log("Você não pode dirigir.");
}
