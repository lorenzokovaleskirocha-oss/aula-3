// 1. Define a função principal que aceita o callback (operacao)
function calcular(a, b, operacao) {
  // Executa a função recebida no parâmetro passando 'a' e 'b' como argumentos
  return operacao(a, b);
}

// 2. Cria as Arrow Functions para cada operação matemática
const somar = (x, y) => x + y;
const subtrair = (x, y) => x - y;
const multiplicar = (x, y) => x * y;

// 3. Testando a calculadora passando as funções como argumentos
const resultadoSoma = calcular(10, 5, somar);
const resultadoSubtracao = calcular(10, 5, subtrair);
const resultadoMultiplicacao = calcular(10, 5, multiplicar);

// 4. Exibe os resultados com Template Strings
console.log(`10 + 5 = ${resultadoSoma}`);          // Saída: 10 + 5 = 15
console.log(`10 - 5 = ${resultadoSubtracao}`);     // Saída: 10 - 5 = 5
console.log(`10 * 5 = ${resultadoMultiplicacao}`); // Saída: 10 * 5 = 50