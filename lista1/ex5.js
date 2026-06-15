// O laço vai de 1 até 100
for (let i = 1; i <= 100; i++) {
  
  // 1. Verifica se é múltiplo de 3 E 5 ao mesmo tempo
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } 
  // 2. Verifica se é múltiplo apenas de 3
  else if (i % 3 === 0) {
    console.log("Fizz");
  } 
  // 3. Verifica se é múltiplo apenas de 5
  else if (i % 5 === 0) {
    console.log("Buzz");
  } 
  // 4. Se não for múltiplo de nenhum deles, imprime o próprio número
  else {
    console.log(i);
  }
}