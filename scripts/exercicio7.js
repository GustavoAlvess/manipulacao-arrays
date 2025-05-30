/* 7 – Prioridade na fila
Uma emergência surgiu e dois clientes VIP precisam ser atendidos imediatamente. Adicione-os ao início da fila.
 */

let filaAtendimento = [
    "cliente 003",
    "cliente 004",
    "cliente 005",
    "cliente 006",
    "cliente 007"
  ];

  console.log(filaAtendimento);
  
  filaAtendimento.shift("cliente VIP 01", "cliente VIP 02")
  console.log('Fila atualizada:');
  console.log(filaAtendimento);