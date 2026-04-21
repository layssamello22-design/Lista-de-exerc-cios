/*Desafio: Uma loja está em promoção. Crie um programa que leia o preço de um
produto e aplique um desconto fixo de 15%. Mostre na tela o preço original, o valor do
desconto e o novo preço final.*/

//saudações
window.alert("Seja bem-vindo(a) a lista de exercícios!");
window.alert("Para saber o desconto de algum produto, preencha");


//Insira o preço de um produto
let produto = prompt("Insira o nome do produto.");
let valorinicial = Number(prompt("Insira o valor do produto."));

let desconto = 0.15;

// calculo
let valorfinal = valorinicial -(valorinicial * desconto);

//resultado
alert("Produto=" + produto +
    "\n Preço original: R$ " + valorinicial.toFixed(2) + " reais " +
    "\n Desconto fixo: 15% " + 
    "\n Preço final: R$ " + valorfinal.toFixed(2) + " reais ");

