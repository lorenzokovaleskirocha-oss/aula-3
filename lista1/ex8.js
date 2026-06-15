// 1. Importa a biblioteca para ler o tamanho que o usuário escolher
const readline = require('readline-sync');
const tamanho = parseInt(readline.question("Digite o tamanho do tabuleiro (ex: 8): "));

// 2. Inicializa a string que vai guardar todo o tabuleiro
let tabuleiro = "";

// 3. O primeiro laço (externo) controla as LINHAS
for (let linha = 0; linha < tamanho; linha++) {
  
  // 4. O segundo laço (interno) controla as COLUNAS de cada linha
  for (let coluna = 0; coluna < tamanho; coluna++) {
    
    // Se a soma dos índices da posição for par, adiciona espaço. Se for ímpar, adiciona #
    if ((linha + coluna) % 2 === 0) {
      tabuleiro += " ";
    } else {
      tabuleiro += "#";
    }
  }
  
  // 5. Ao final de cada linha preenchida, adiciona uma quebra de linha (\n)
  tabuleiro += "\n";
}

// 6. Exibe o tabuleiro completo de uma vez só
console.log(tabuleiro);