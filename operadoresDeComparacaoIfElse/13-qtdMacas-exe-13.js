var readlineSync = require('readline-sync');

// 13. Calculando o valor de compra de maçãs:

// Escreva um programa que leia a quantidade de maçãs compradas e o preço unitário, e calcule o valor total da compra. 
//Aplique um desconto de 10% se a quantidade comprada for maior ou igual a 12 unidades.

let qtdMaca = parseInt(readlineSync.question('Digite a quantidade de macas compradas: '))
let valorUnitario = parseFloat(readlineSync.question('Digite o valor unitario da maca: '))

let valorTotal = qtdMaca * valorUnitario
console.log(`O valor das macas sem desconto foi de R$: ${valorTotal}`)

if (qtdMaca >= 12) {
  let desconto = valorTotal * .10
  //               278.79999999999995 - 27.877777777
  let valorFinal = valorTotal - desconto
  // valorFinal = 250.91999999999996
  console.log('Seu desconto de 10% foi de R$', desconto, ' Voce pagara: ', valorFinal.toFixed(2))
} else {
    console.log('Não foi aplicado desconto')
}