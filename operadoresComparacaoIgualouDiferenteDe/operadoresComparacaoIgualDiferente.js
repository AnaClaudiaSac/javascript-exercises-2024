var readlineSync = require('readline-sync');



// 1. Comparação Simples:

// Peça ao usuário que digite dois valores.
// Armazene os valores nas variáveis x e y.
// Utilize os operadores == e === para comparar os valores e exiba o resultado para o usuário.

//----------------------------//---------------------
// let x = parseFloat(readlineSync.question("Digite um numero: "))
// let y = parseFloat(readlineSync.question("Digite outro numero: ")) 

// let resultadoX = x == y
// let resultadoY = y === x
// let resultadoXY = x == x && y == y 
// let resultadoXY2 = x === x && y === y

// console.log('1 - Os resultados armazenados em x e y são: ',resultadoX)
// console.log('Os resultados armazenados em x e y são: ',resultadoY)
// console.log('Os resultados armazenados em x e y são: ',resultadoXY)
// console.log('Os resultados armazenados em x e y são: ',resultadoXY2)



//--------------------------------------------------------------------------------------------------------------------------------
// 2. Comparação de Strings:

// Compare duas strings, str1 e str2, para verificar se são iguais (considerando maiúsculas e minúsculas). Utilize o operador == e ignore a capitalização com toLowerCase().

// /----------------------------//---------------------
// let str1 = readlineSync.question("Didite uma palavra: ")
// let str2 = readlineSync.question("Digite outra palavra: ")

// let resultadoSrt = srt1 == srt2
// let resultadoSrt2 = srt1 == srt1

// let resultadoLoW1 = str1.toLocaleLowerCase == str2 
// let resultadoLoW2 = str1 == str2.toLocaleLowerCase
// let resultadoLoW3 = str2.toLocaleLowerCase === str2.toLocaleLowerCase
// let resultadoLoW4 = str1.toLocaleLowerCase === str1.toLocaleLowerCase

// console.log('2 - As strings são iguais ?: ', resultadoSrt)
// console.log('As strings são iguais ?: ', resultadoSrt2)
// console.log("Essas strings são ?: ", resultadoLoW1)
// console.log("Essas strings são ?: ",resultadoLoW2)
// console.log("Essas strings são ?: ",resultadoLoW3)
// console.log("Essas strings são ?: ",resultadoLoW4)

// Exemplo de console com Templete literals // Templete Strings ${}

// console.log(`${str1} == ${str2}: ${str1 == str2}`);
// console.log(`${str1.toLowerCase()} === ${str2.toLowerCase()}: ${str1.toLowerCase() === str2.toLowerCase()}`);



//--------------------------------------------------------------------------------------------------------------------------------
// 3. Comparação Numérica:

// Compare dois números, num1 e num2, para verificar se são iguais. Utilize o operador ==.
// Instruções:
// Peça ao usuário que digite dois números.
// Armazene os números nas variáveis num1 e num2.
// Utilize o operador == para comparar os números e exiba o resultado para o usuário.
// /----------------------------//---------------------

// let num1 = parseFloat(readlineSync.question("Digite um numero: "))
// let num2 = parseFloat(readlineSync.question("Digite outro numero: "))

// let reslCompNum1 = num1 == num1
// let reslCompNum2 = num2 == num2
// let reslCompNum3 = num1 == num2
// let reslCompNum4 = num1 === num1
// let reslCompNum5 = num2 === num2
// let reslCompNum6 = num1 === num2


// console.log("3 - Os numeros são iguais ?: ",reslCompNum1)
// console.log("Os numeros são iguais ?: ",reslCompNum2)
// console.log("Os numeros são iguais ?: ",reslCompNum3)
// console.log("Os numeros são iguais ?: ",reslCompNum4)
// console.log("Os numeros são iguais ?: ",reslCompNum5)
// console.log("Os numeros são iguais ?: ",reslCompNum6)



//--------------------------------------------------------------------------------------------------------------------------------
// 4. Comparação de Desigualdade:

// Verifique se duas variáveis, x e y, armazenam valores diferentes. Utilize o operador !=.
// Instruções:
// Peça ao usuário que digite dois valores.
// Armazene os valores nas variáveis x e y.
// Utilize o operador != para comparar os valores e exiba o resultado para o usuário.
//----------------------------//---------------------

// let x = parseFloat(readlineSync.question("Digite um numero: "))
// let y = parseFloat(readlineSync.question("digite outro numero: "))
  
// let reslValor1 = x !== x
// let reslValor2 = y !== y
// let reslValor3 = x !== y
// let reslValor4 = y !== x

// console.log("4 - Os numeros são iguais ?: ", reslValor1)
// console.log("Os numeros são iguais ?: ", reslValor2)
// console.log("Os numeros são iguais ?: ", reslValor3)
// console.log("Os numeros são iguais ?: ", reslValor4)



//--------------------------------------------------------------------------------------------------------------------------------
// 5. Desigualdade Numérica:

// Compare dois números, num1 e num2, para verificar se são diferentes. Utilize o operador !=.
// Instruções:
// Peça ao usuário que digite dois números.
// Armazene os números nas variáveis num1 e num2.
// Utilize o operador != para comparar os números e exiba o resultado para o usuário.
//----------------------------//---------------------

// let num1 = parseFloat(readlineSync.question("Digite um numero: "))
// let num2 = parseFloat(readlineSync.question("Digite outro numero"))

// let reslDifNum1 = num1 != num1
// let reslDifNum2 = num2 != num2
// let reslDifNum3 = num1 != num2
// let reslDifNum4 = num2 != num1

// console.log("5 - Os numeros são diferentes ?: ",reslDifNum1)
// console.log("Os numeros são diferentes ?: ",reslDifNum2)
// console.log("Os numeros são diferentes ?: ",reslDifNum3)
// console.log("Os numeros são diferentes ?: ",reslDifNum4)


//--------------------------------------------------------------------------------------------------------------------------------
// 6. Maior que:
// Compare dois números, num1 e num2, para verificar se num1 é maior ou menor ou igual que num2. Utilize o operador >.
// Instruções:
// Peça ao usuário que digite dois números.
// Armazene os números nas variáveis num1 e num2.
// Utilize o operador > para comparar os números e exiba o resultado para o usuário.
//----------------------------//---------------------

// let num1 = parseFloat(readlineSync.question("Digite um numero: "))
// let num2 = parseFloat(readlineSync.question("Digite outro numero: "))


// let reslMaMeN1 = num1 > num2
// let reslMaMeN2 = num2 > num1
// let reslMaMeN3 = num1 < num2
// let reslMaMeN4 = num2 < num1
// let reslMaMeN5 = num1 >= num2
// let reslMaMeN6 = num2 >= num1
// let reslMaMeN7 = num1 <= num2
// let reslMaMeN8 = num2 <= num1

// console.log("Os numeros são iguais ?: ", reslMaMeN1)
// console.log("Os numeros são iguais ?: ", reslMaMeN2)
// console.log("Os numeros são iguais ?: ", reslMaMeN3)
// console.log("Os numeros são iguais ?: ", reslMaMeN4)
// console.log("Os numeros são iguais ?: ", reslMaMeN5)
// console.log("Os numeros são iguais ?: ", reslMaMeN6)
// console.log("Os numeros são iguais ?: ", reslMaMeN7)
// console.log("Os numeros são iguais ?: ", reslMaMeN8)



//--------------------------------------------------------------------------------------------------------------------------------




