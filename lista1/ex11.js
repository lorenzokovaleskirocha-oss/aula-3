// 1. Importa a biblioteca readline-sync para ler a idade do teclado
const readline = require('readline-sync');

// 2. Define a função que valida a idade eleitoral
function podeVotar(idade) {
  // Retorna true se a idade for maior ou igual a 16, e false caso contrário
  return idade >= 16;
}

// 3. Lê a idade digitada pelo usuário e converte para número inteiro
const idadeUsuario = parseInt(readline.question("Digite a sua idade: "));

// 4. Utiliza a função dentro de uma estrutura condicional para exibir a mensagem
if (podeVotar(idadeUsuario)) {
  console.log(`Com ${idadeUsuario} anos, você já pode votar!`);
} else {
  console.log(`Com ${idadeUsuario} anos, você ainda não tem a idade mínima para votar.`);
}