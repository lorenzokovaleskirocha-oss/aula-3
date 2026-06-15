// 1. Importa a biblioteca readline-sync
const readline = require('readline-sync');

// 2. Lê o número digitado pelo usuário e converte para tipo numérico
const numeroInicial = parseInt(readline.question("Digite um numero para iniciar a contagem regressiva: "));

// 3. Faz o laço de repetição decrementar a partir do número digitado até 1
for (let i = numeroInicial; i >= 1; i--) {
  console.log(i);
}

// 4. Mensagem final após o término do laço
console.log("Fim!");