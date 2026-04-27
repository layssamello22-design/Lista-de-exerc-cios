/*Desafio: Crie um script que leia o valor total da conta de uma mesa de restaurante.
Sabendo que a taxa de serviço do garçom é de 10%, calcule o valor da gorjeta e mostre
o valor total que o cliente deve pagar.
*/

//saudações
window.alert("Seja bem-vindo(a) a lista de exercícios!");
window.alert("Para saber o valor total e o da gorjeta em um restaurante, preencha:");


//Insira o preço de um produto
let valorinicial = Number(prompt("Insira o valor total da conta."));

let desconto = 0.10;

// calculo
let gorjeta = valorinicial * desconto;
let valorfinal = valorinicial + gorjeta;

//resultado
alert("Valor Total= R$" + valorinicial.toFixed(2) + " reais " +
    "\n Valor da Gorjeta: R$ " + gorjeta.toFixed(2) + " reais " +
    "\n Valor final: R$ " + valorfinal.toFixed(2) + " reais ");
    