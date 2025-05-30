/* 5 – Erro de importação
O primeiro item do carregamento chegou com defeito e precisa ser descartado. Remova-o da lista de produtos importados.
*/

let importados = [
    "carregador portátil",
    "cabo HDMI",
    "leitor biométrico",
    "controle sem fio",
    "webcam 4K"
  ];

  console.log(importados);
  
  importados.unshift() // removendo o primeiro item da lista
  console.log('Lista atualizada');
  console.log(importados);