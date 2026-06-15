function contarLetra(texto, letra) {
  let contador = 0;

  // O laço percorre a string do índice 0 até o último caractere
  for (let i = 0; i < texto.length; i++) {
    // Compara o caractere atual com a letra procurada
    if (texto[i] === letra) {
      contador++; // Se for igual, adiciona 1 ao contador
    }
  }

  return contador;
}

// Testando a função
const frase = "javascript é muito divertido e poderoso";
const letraProcurada = "o";

const resultado = contarLetter(frase, letraProcurada);
console.log(`A letra "${letraProcurada}" aparece