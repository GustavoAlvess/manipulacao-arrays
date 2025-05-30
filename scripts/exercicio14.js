/*  14 – Destaques da semana no blog
A home do site exibe os 4 artigos mais recentes da semana. Sua tarefa é gerar uma nova lista com os 4 primeiros artigos, sem alterar o array original.
*/

let artigosBlog = [
  "Como usar Docker com Node.js",
  "5 erros comuns em JavaScript",
  "Introdução ao TypeScript",
  "Clean Code na prática",
  "Design Patterns úteis",
  "Refatoração de código",
  "Boas práticas de API REST",
  "Segurança em aplicações web"
];

let artigosMaisRecentes = artigosBlog.slice(0,4) // novo array somente com os 4 primeiros do segundo array

console.log(artigosBlog);
console.log("Artigos mais recentes:\n" , artigosMaisRecentes);
