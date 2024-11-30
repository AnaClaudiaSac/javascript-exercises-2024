var readlineSync = require('readline-sync');


// Exercício 7: Verificando Ano Bissexto

// Peça ao usuário que digite um ano (ano).
// Use if e else para verificar se o ano é bissexto.
// Um ano é bissexto se:
// É divisível por 4.
// Não é divisível por 100.
// É divisível por 400.

let ano = parseInt(readlineSync.question('Digite um ano: '))

if(ano % 4 === 0) {
  console.log(`O Ano  ${ano} é Bissexto!`)
}else if(ano % 400 === 0 ){
  console.log(`O Ano  ${ano} é Bissexto`)
}else {
  console.log(`O Ano ${ano} não é Bissexto`)
}
