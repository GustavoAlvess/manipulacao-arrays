/* 1 – Cadastro de novos produtos
Você está desenvolvendo um sistema de estoque para uma loja de informática. Ao iniciar o cadastro dos produtos em promoção da semana, percebeu que dois novos itens chegaram e precisam ser adicionados no final da lista atual. Atualize o array para incluir os novos produtos "SSD 1TB" e "mesa digitalizadora". */

let promocoes = [
    "teclado mecânico",
    "mouse gamer",
    "monitor ultrawide",
    "cadeira ergonômica",
    "webcam HD",
    "fone bluetooth",
    "notebook i5",
    "hub USB"
  ];

  console.log(promocoes);
  
  promocoes.push("SSD 1TB", "mesa digitalizadora") // adicionando com push
  
  console.log("Lista atualizada:");
  
  console.log(promocoes);
