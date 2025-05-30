/* 15 – Remoção de itens inativos no menu
Dois itens do menu de navegação estão obsoletos e precisam ser removidos da posição 2 e 3, pois o sistema não oferece mais esses serviços.
*/ 

let menuNavegacao = [
  "Início",
  "Serviços",
  "Portfólio",
  "Blog",
  "Contato",
  "Login",
  "Área do cliente"
];

let itenRemovidos = menuNavegacao.splice(1,2)
console.log('Menu atualizado:\n' , menuNavegacao);

console.log('Itens removidos:', itenRemovidos);
