/*Desafio: Pergunte ao usuário quanto dinheiro ele tem na carteira (em Reais) e mostre
quantos Dólares ele pode comprar. (Considere uma cotação fixa, por exemplo, US$
1,00 = R$ 5,00).*/

window.alert('Seja bem-vindo(a) a lista de exercícios!');
//Perguntar pro usuário tem na carteira
let reais = Number(prompt("Quanto de dinheiro o senhor(a) tem na carteira em Reais?"));

//dolar atualmnete
let dolares = 5;

//conversão de real pra dolar 
let conversao = reais/dolares;

alert("Com o valor de " + reais.toFixed(2) + " reais o Senhor(a) pode comprar " + conversao.toFixed(2) + " dolares." )

