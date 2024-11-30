var readlineSync = require('readline-sync');


// 26 - Verificação de saldo bancário para aprovação de uma transação:
//Solicite ao usuário que insira seu saldo bancário
// e o valor da transação e determine se a transação pode ser aprovada.

let saldoBancario = parseFloat(readlineSync.question('Digite o valor do seu saldo bancario: '))

let transacao = 2.000

if( saldoBancario >= transacao ){
  console.log('Transação Aprovada')
}else{
  console.log('Transação não Aprovada')
}