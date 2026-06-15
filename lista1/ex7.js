// 1. Criamos uma variável acumuladora para guardar o total da soma
let soma = 0;

// 2. O laço percorre os números de 1 até 50
for (let i = 1; i <= 50; i++) {
  
  // 3. Verifica se o número atual é par
  if (i % 2 === 0) {
    soma += i; // Se for par, adiciona o valor de 'i' à variável 'soma'
  }
}

// 4. Exibe o resultado final
console.log(`A soma de todos os números pares entre 1 e 50 é: ${soma}`);