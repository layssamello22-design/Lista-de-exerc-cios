/*Desafio: Um cliente precisa calcular a área de um terreno retangular. Peça para o
usuário digitar a largura e o comprimento do terreno (em metros). Calcule a área total
(largura × comprimento) e mostre na tela.*/

//saudações
window.alert("Seja bem-vindo(a) a lista de exercícios!");

window.alert("Para saber a área de um terreno retangular, preencha os valores.");
let largura = Number(prompt("Digite a largura do terreno em metros"));
let comprimento = Number(prompt("Digite o comprimento do terreno em metros"));

//calcular
let area = (largura * comprimento);

//resultado

alert("A área de um terreno retangular é :" + area + "m²");