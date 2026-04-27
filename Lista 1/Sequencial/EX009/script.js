/*• Desafio: Pergunte a idade do usuário (apenas os anos completos). Sabendo que um ano
tem 365 dias, calcule e mostre aproximadamente quantos dias de vida ele já teve.*/

//saudações
window.alert("Seja bem-vindo(a) a lista de exercícios!");
window.alert("Para saber quantos dias de vida o usuário tem, preencha:");

//o que pede?
let idade = Number(prompt("Qual a sua idade (apenas os anos completos)?"));
let ano = 365;

//calculo

let diastotais = idade * ano;

//resultado
alert("Você tem " + diastotais + " dias de vida.")