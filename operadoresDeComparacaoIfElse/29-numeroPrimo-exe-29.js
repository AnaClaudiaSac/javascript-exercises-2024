var readlineSync = require('readline-sync');

//28 - Peça ao usuário para inserir um número e determine se ele é um número primo.
//números primos: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.



let numero = parseInt(readlineSync.question('Digite um numero de 1 a 100 para determinar se um numero primo: '))

if(numero === 2 ||
   numero === 3 ||
   numero === 5 ||
   numero === 7 ||
   numero === 11||
   numero === 13||
   numero === 17||
   numero === 19||
   numero === 23||
   numero === 29||
   numero === 31||
   numero === 37||
   numero === 41||
   numero === 43||
   numero === 47||
   numero === 53||
   numero === 59||
   numero === 61||
   numero === 67||
   numero === 71||
   numero === 73||
   numero === 79||
   numero === 83||
   numero === 89
){
  console.log('O número é primo')
}else{
  console.log('O número não é primo')
}