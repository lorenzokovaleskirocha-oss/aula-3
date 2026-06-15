// 1. Cria o array inicial com 5 alunos e suas respectivas notas
const turma = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 6.0 },
  { nome: "Carlos", nota: 7.2 },
  { nome: "Diana", nota: 5.5 },
  { nome: "Eduardo", nota: 9.0 }
];

// ---

// a) Use .map() para gerar um novo array com a propriedade 'situacao'
const boletimCompleto = turma.map(aluno => {
  return {
    ...aluno, // O operador ... (spread) copia o nome e a nota do aluno atual
    situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado" //