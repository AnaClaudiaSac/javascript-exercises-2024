

var readlineSync = require('readline-sync');

// Exercício 9: Verificando Maioridade para Votar

// Peça ao usuário que digite sua idade (idade).
// Use if e else para verificar se o usuário tem idade suficiente para votar (18 anos ou mais) em seu país.

let idade = parseInt(readlineSync.question('Digite sua idade: '))

if(idade >= 18 && idade <= 65 ){
  console.log('Pode votar no Brasi')
}else if(idade = 16 &&  idade > 65){
  console.log('Voto Opcional no Brasil')
}else{
  console.log('Não vota no Brasil')
}