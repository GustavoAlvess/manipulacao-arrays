/* 20 – Formatando lista de preços
Os preços estão salvos como números e precisam ser exibidos no formato de moeda brasileira para o painel de clientes. Gere uma nova lista com os valores formatados.
*/

let precos = [
  129.9,
  399.5,
  259.0,
  89.9,
  599.99,
  39.5,
  999.0
];

// adicionando um R$ antes de todos os números laço de repetição e metodo push

let precosBrl = [];

for (let i = 0; i < precos.length; i++) {
    precosBrl.push('R$' + precos[i])
    
}

console.log(precosBrl);
