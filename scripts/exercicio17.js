/* 🔹 17 – Atualização de lista de usuários
Você recebeu dois arrays com usuários de sistemas diferentes que agora estão sendo fundidos. Crie uma nova lista combinando todos os usuários.
*/

let usuariosSistemaA = [
  "aline.souza",
  "maria.ferreira",
  "carlos.lima",
  "ana.martins"
];

let usuariosSistemaB = [
  "joao.silva",
  "paulo.pereira",
  "fernanda.alves",
  "marcelo.cardoso"
];

let usuariosAeB = usuariosSistemaA.concat(usuariosSistemaB) // juntando as duas listas em uma nova

console.log("Usuários combinados:\n" , usuariosAeB);
