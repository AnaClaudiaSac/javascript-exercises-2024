var readlineSync = require('readline-sync');

// 1. Calculadora básica:

// Peça ao usuário dois números.
// Some os números e imprima o resultado.
// Subtraia os números e imprima o resultado.
// Multiplique os números e imprima o resultado.
// Divida os números e imprima o resultado.
//------------------//-------------------//-----
// let num1 = Number.parseFloat(readlineSync.question('Digite o primeiro numero: '))
// let num2 = Number.parseFloat(readlineSync.question('Digite o primeiro segundo: '))
// let soma = num1 + num2
// let subtra = num1 - num2
// let multip = num1 + num2
// let divis = num1 / num2

// console.log('1 - A soma é: ', soma)
// console.log('A subtraçao é: ', subtra)
// console.log('A multiplicação é: ', multip)
// console.log('A divisão é: ', divis)


//--------------------------------------------------------------------------------------------
// 2. Calcular a idade:

// Peça ao usuário o ano de nascimento.
// Peça ao usuário o ano atual.
// Calcule a idade e imprima o resultado.
//------------------//-------------------//-----
// let nascimento = Number.parseInt(readlineSync.question('Digite a ano do seu nascimento: '))
// let anoAtual = Number.parseInt(readlineSync.question('Digite o ano atual: '))
// let idade = nascimento - anoAtual

// console.log("2 - A sua idade é: ", idade)


//--------------------------------------------------------------------------------------------------
// 3. Calcular o preço total:

// Peça ao usuário o preço do produto.
// Peça ao usuário a quantidade do produto.
// Calcule o preço total e imprima o resultado.
//------------------//-------------------//-----
// let precoProduto = parseFloat(readlineSync.question('Qual o preço do produto ?: '))
// let quantidaDeProduto = parseInt(readlineSync.question('Qual a quantidade do produto ?: '))
// let precoTotal = precoProduto * quantidaDeProduto

// console.log("3 - O preço total do produto é R$:  ", precoTotal)


//--------------------------------------------------------------------------------------------------------------------------------
// 4. Converter metros para centímetros:

// Peça ao usuário a medida em metros.
// Converta a medida para centímetros e imprima o resultado.
//------------------//-------------------//-----
//  let medidasMetro = parseFloat(readlineSync.question('Informe a medida em metros: '))
//  let converteCentimetros = medidasMetro * 100

//  console.log('4 - O resultado de Metros para centimetros é: ', converteCentimetros)

//----------------------------------------------------------------------------------------------------------------------------------
// 5. Converter Celsius para Fahrenheit:

// Peça ao usuário a temperatura em Celsius.
// Converta a temperatura para Fahrenheit e imprima o resultado.
//------------------//-------------------//-----
// let celsius = parseFloat(readlineSync.question('Informe a temperatura de agora em Celsius: '))
// let conversaoParaFahrenheit = celsius * 1.8 + 32

// console.log("5 - A temperatura convertido de Celsius em Fahrenheit e: " , conversaoParaFahrenheit)


//--------------------------------------------------------------------------------------------------------------------------------
// 6. Calcular a área de um quadrado:

// Peça ao usuário o lado do quadrado.
// Calcule a área do quadrado e imprima o resultado.
//------------------//-------------------//-----
// let ladoQuadrado = parseFloat(readlineSync.question('Digite um numero que corresponda o lado de um quadrado: '))
// let areaQuadrado = ladoQuadrado * ladoQuadrado

// console.log("6 - A area do quadrado tem: " ,areaQuadrado)


//--------------------------------------------------------------------------------------------------------------------------------
// 7. Calcular o perímetro de um triângulo:

// Peça ao usuário os três lados do triângulo.
// Calcule o perímetro do triângulo e imprima o resultado.
//------------------//-------------------//-----
// let = lado1 = parseFloat(readlineSync.question("Digite o primeiro lado do triangulo: "))
// let = lado2 = parseFloat(readlineSync.question("Digite o segundo lado do triangulo: "))
// let = lado3 = parseFloat(readlineSync.question("Digite o terceiro lado do triangulo: "))

// let triangulo =  lado1 + lado2 + lado3

// console.log("7 - O perimetro do triangulo é: ",triangulo)


//--------------------------------------------------------------------------------------------------------------------------------
// 8. Calcular a média de três números:

// Peça ao usuário três números.
// Calcule a média dos três números e imprima o resultado.
//------------------//-------------------//-----
// let n1 = parseInt(readlineSync.question("Digite um numero inteiro: "))
// let n2 = parseInt(readlineSync.question("Digite um numero inteiro: "))
// let n3 = parseInt(readlineSync.question("Digite um numero inteiro: "))
// let media= (n1 + n2 + n3) / 3

// console.log("8 - A média dos tres numeros é: ", media)


//----------------------------------------------------------------------------------------------------------------------------
// 9.Calcular a velocidade média:

// Peça ao usuário a distância percorrida.
// Peça ao usuário o tempo gasto.
// Calcule a velocidade média e imprima o resultado.
//------------------//-------------------//-----
// let distanciaPerc = parseFloat(readlineSync.question('Digite a distancia percorrida (km): '))
// let tempoGasto = parseFloat(readlineSync.question('Digite o tempo gasto percorrido (horas): '))
// let velocidadeMedia = distanciaPerc / tempoGasto

// console.log('9 - A velocidade media foi de:', velocidadeMedia, 'km/h')


//--------------------------------------------------------------------------------------------------------------------------------
// 10. Calcular o desconto:

// Peça ao usuário o preço original do produto.
// Peça ao usuário a porcentagem de desconto.
// Calcule o valor do desconto e imprima o resultado.
//------------------//-------------------//-----
// let precoOriginal = parseFloat(readlineSync.question("Digite o valor original do produto R$: "))
// let porcentagemDesconto = parseFloat(readlineSync.question("Digite o valor do desconto %: "))
// let valorDesconto = precoOriginal * (porcentagemDesconto / 100)  
// let totalComDesconto = precoOriginal - valorDesconto



// console.log("10 - O valor com desconto foi de R$: ", totalComDesconto)


//--------------------------------------------------------------------------------------------------------------------------------
// 11. Calcular o lucro:

// Peça ao usuário o preço de custo do produto.
// Peça ao usuário o preço de venda do produto.
// Calcule o lucro e imprima o resultado.
//------------------//-------------------//-----
// let precoCusto = parseFloat(readlineSync.question("Digite o preco de custo do produto R$: "))
// let precoVenda = parseFloat(readlineSync.question("Digite o preco de venda do produto R$: "))
// let valorLucroNegativo = (precoCusto - precoVenda) * -1     // 1º
// let lucro = valorLucroNegativo * -1           //2 º
// let lucro2 = Math.abs(valorLucroNegativo)     //3º

//console.log("11 - O valor do lucro é R$: ", valorLucroNegativo)     // Três exemplos de um número não ficar negativo.

//--------------------------------------------------------------------------------------------------------------------------------
// 12. Calcular o imposto:

// Peça ao usuário o valor da compra.
// Peça ao usuário a porcentagem do imposto.
// Calcule o valor do imposto e imprima o resultado.
//------------------//-------------------//-----
// let valorCompra = parseFloat(readlineSync.question("Digite o valor da compra R$: ")) // 1000
// let porcentagemImposto = parseFloat(readlineSync.question("Digite a porcentagem do imposto: ")) // 0.10
// let compraPorcentagem = valorCompra * porcentagemImposto  // 1000 * 0.10

//console.log(compraPorcentagem)

// console.log("12 - O valor do imposto é R$: ", compraPorcentagem)


//--------------------------------------------------------------------------------------------------------------------------------
// 13. Calcular a área de um círculo:

// Peça ao usuário o raio do círculo.                   
// Calcule a área do círculo e imprima o resultado.
//------------------//-------------------//-----
// let raio = parseFloat(readlineSync.question("Digite o raio do circulo: ")) 
// let calcRaio = raio ** 2
// let resulAereaCirculo = Math.PI * calcRaio
// let resultadoFinalArredondado = Math.round(resulAereaCirculo) 
// console.log('Resultado sem arrendondar', resulAereaCirculo)

// console.log("13 - A area do circulo e: ", resultadoFinalArredondado) 


//--------------------------------------------------------------------------------------------------------------------------------
// 14. Calcular o volume de uma esfera:

// Peça ao usuário o raio da esfera.  v = (4 * r**3)* pi /3
// Calcule o volume da esfera e imprima o resultado.
//------------------//-------------------//-----

// let raioEsfera = parseFloat(readlineSync.question("Digite o numero do raio da esfera: "))
// let volumeEsfera = 4 * raioEsfera ** 3
// let totalVolumeEsfera = volumeEsfera * Math.PI / 3
// let totalArredondado = Math.round(totalVolumeEsfera)

// console.log("14 - O volume da esfera é: ", totalArredondado)


//******************** Outro exemplo: **********************
 
// console.log(Math.round(1.1 + 1.3))

// // OU

// let n1 = 1.1
// let n2 = 1.3
// let sum = n1 + n2

// const finalResult = Math.round(sum)

// console.log(finalResult)

//--------------------------------------------------------------------------------------------------------------------------------
// 15. Calcular a equação do segundo grau:

// Peça ao usuário os coeficientes a, b e c da equação.     
// Calcule as raízes da equação e imprima o resultado.

// //------------------//-------------------//-----
//  let coeficienteA = parseFloat(readlineSync.question("Digite um numero para o coeficiente a: "))
//  let coeficienteB = parseFloat(readlineSync.question("Digite um numero para o coeficiente b: "))
//  let coeficienteC = parseFloat(readlineSync.question("Digite um numero para o coeficiente c: "))

//  let absDiscriminant = Math.abs(coeficienteB * coeficienteB - 4 * coeficienteA * coeficienteC)

// let somaB = -coeficienteB
// let doisA = 2 * coeficienteA
// let raizParteReal = somaB / doisA

// let raizParteImaginaria = Math.sign(absDiscriminant) * Math.sqrt(absDiscriminant) / doisA

// if (raizParteImaginaria === 0) {
  
//   console.log(`As raízes reais da equação são: ${raizParteReal}`);
// } else {
 
//   console.log(`As raízes complexas da equação são: ${raizParteReal} + ${raizParteImaginaria}i e ${raizParteReal} - ${raizParteImaginaria}i`);
// }