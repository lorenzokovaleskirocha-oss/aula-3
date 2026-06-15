function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}

// Testando a função
console.log(min(5, 10)); // Retorna 5
console.log(min(20, 8));  // Retorna 8
console.log(min(4, 4));   // Retorna 4 (tanto faz, são iguais)