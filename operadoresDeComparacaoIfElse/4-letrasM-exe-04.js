var readlineSync = require('readline-sync');


// Exercício 4: Verificando Vogais e Consoantes

// Peça ao usuário que digite uma letra (letra).
// Converta a letra para maiúscula.
// Use if e else para verificar se a letra é uma vogal (A, E, I, O, U) ou uma consoante.


let letra = readlineSync.question('Digite uma letra: ').toUpperCase()
console.log(letra)

if(letra === 'A' || 
   letra === 'E' ||
   letra === 'I' || 
   letra === 'O' || 
   letra === 'U' 
){
  console.log('A letra ' + letra + ' e uma vogal')
}else {
  console.log('A letra ' + letra + ' Consoante')
}


