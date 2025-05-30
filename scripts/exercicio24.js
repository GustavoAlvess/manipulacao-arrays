/* 24 – Ranking de vendas
Você recebeu a pontuação de vendas dos representantes e precisa gerar um ranking do maior para o menor antes da premiação.
 */
let vendas = [3500, 1800, 4200, 3900, 5000, 1200, 2900, 4700];
// usando o sort com condição para ordenar numeros
/* condição: 
Se retornar um valor negativo: 'a' deve vir antes de 'b' na ordem de classificação.
Se retornar um valor positivo:  'a' deve vir depois de 'b' na ordem de classificação.
Se retornar zero: 'a' e 'b' devem ter a mesma posição na ordem de classificação.*/
let vendasCrescentes = vendas.sort((a, b) => a - b);
console.log(vendasCrescentes);
