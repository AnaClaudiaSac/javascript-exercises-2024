var readlineSync = require('readline-sync');

// Exercício 10: Classificando Aluno por Nota

// Peça ao usuário que digite a nota do aluno (nota).
// Use if e else para classificar a nota do aluno:
// A: se a nota for entre 90 e 100.
// B: se a nota for entre 80 e 89.
// C: se a nota for entre 70 e 79.
// D: se a nota for entre 60 e 69.
// E: se a nota for entre 50 e 59.
// F: se a nota for menor que 50.

let nota = parseFloat(readlineSync.question('Digite a nota do aluno(a): '))

if (nota >= 90 && nota <= 100) {
  console.log('Nota: A')
}else if (nota >= 80 && nota <= 89) {
  console.log('Nota: B')
}else if (nota >= 70 && nota <= 79) {
  console.log('Nota: C')
}else if (nota >= 60 && nota <= 69) {
  console.log('Nota : D')
}else if (nota >= 50 && nota <= 59) {
  console.log('Nota: E')
}else {
  console.log('Nota : F')
}

