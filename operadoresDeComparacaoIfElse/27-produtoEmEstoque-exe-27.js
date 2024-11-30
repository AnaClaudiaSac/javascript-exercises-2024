var readlineSync = require('readline-sync');

// 27 - Verificação de disponibilidade de um produto em estoque:
// Solicite ao usuário que insira o nome do produto e a 
// quantidade desejada e verifique se o produto está disponível em estoque.

let nomeProduto = (readlineSync.question('Digite o nome do produto: '))

let qtdProdutoDeseja = parseInt(readlineSync.question('Digite a quantidade desejada: '))

let qtdProduto = 200

if(qtdProdutoDeseja <= qtdProduto){
  console.log(`O produto ${nomeProduto} está disponível em estoque`)
}else{
  console.log(`O produto ${nomeProduto} não está disponível em estoque`)
}