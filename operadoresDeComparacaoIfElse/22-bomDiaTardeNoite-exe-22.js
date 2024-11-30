var readlineSync = require('readline-sync');

// 22 - Escreva um programa que pergunte ao usuário a hora atual (em formato de 24 horas) e,
//  em seguida, exiba uma mensagem apropriada, 
//  como "Bom dia", "Boa tarde" ou "Boa noite".

let hora = parseFloat(readlineSync.question('Qual a hora atual: '))


if (hora >= 0 && hora < 12) {
  console.log('Bom Dia!')

} else if (hora >= 12 && hora <= 17) {
  console.log('Boa Tarde!')

} else if (hora >= 18  && hora < 24){
  console.log('Boa Noite!') 
} else {
  console.log('Madrugada')
}




