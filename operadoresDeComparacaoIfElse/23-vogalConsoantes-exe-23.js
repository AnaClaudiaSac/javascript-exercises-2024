var readlineSync = require('readline-sync');

//23- Crie um programa que solicite ao usuário uma letra e verifique se é uma vogal ou uma consoante.

let letra = readlineSync.question('Digite uma letra: ')


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


