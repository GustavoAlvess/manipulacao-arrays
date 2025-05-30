/* 8 – Alunos transferidos
Duas alunas transferidas chegaram atrasadas e devem ser colocadas no início da lista de chamada. Os nomes são "Beatriz" e "Rafaela".
*/

let chamada = [
    "Carlos",
    "Fernanda",
    "João",
    "Mariana",
    "Lucas",
    "Camila"
  ];

  console.log(chamada);
  
  chamada.shift("Beatriz" , " Rafaela") // adicionando alunas atrasadas a chamada
  
  
  console.log('Chamada atualizada');
  console.log(chamada);
  