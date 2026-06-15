// 1. Cria o array contendo o intervalo de números (inclusive)
function range(inicio, fim) {
  const resultado = [];
  
  for (let i = inicio; i <= fim; i++) {
    resultado.push(i); // Adiciona o número atual ao final do array
  }
  
  return resultado;
}

// 2. Soma todos os números contidos em um array
function soma(array) {
  let total = 0;
  
  for (let i = 0; i < array.length; i++) {
    total += array[i]; // Acumula o valor de cada posição do array
  }
  
  return total;
}

// 3. Testando a combinação das duas funções
const intervalo = range(1, 10);
const resultadoFinal = soma(intervalo);

console.log("Array gerado:", intervalo); 
// Saída: