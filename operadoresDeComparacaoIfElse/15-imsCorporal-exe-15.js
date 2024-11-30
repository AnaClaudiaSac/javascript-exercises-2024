var readlineSync = require('readline-sync');



// 15-Crie um programa que peça ao usuário peso e altura.

// Calcule o Índice de Massa Corporal (IMC) do usuário.
// Utilize if/else para classificar o IMC de acordo com a OMS:
// Abaixo de 18,5: Magreza
// Entre 18,5 e 24,9: Peso normal
// Entre 25 e 29,9: Sobrepeso
// Acima de 30: Obesidade
// Exiba o resultado do IMC e a classificação na tela.

let pesoKg = parseFloat(readlineSync.question('Digite seu peso Kg: '))
let altura = parseFloat(readlineSync.question('Digite sua altura: '))

let ICM =  pesoKg / (altura ** 2) 

console.log(ICM.toFixed(2))

if (ICM < 18.5) {
  console.log('Magreza')
}else if(ICM >= 18.5 && ICM <= 24.9){
  console.log('Peso normal')
}else if(ICM >= 25 && ICM <= 29.90){
  console.log('Sobrepeso')
}else {
  console.log('Obesidade')
}







  //  Indice de Massa Corporal – IMC = Massa (kg) ÷ Altura (m)².


