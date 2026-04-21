/*Desafio: O Brasil usa a escala Celsius, mas os EUA usam Fahrenheit. Crie um
programa que leia uma temperatura em graus Celsius e a converta para Fahrenheit.
• Fórmula: F = (C × 9/5) + 32*/

//saudações
window.alert("Seja bem-vindo(a) a lista de exercícios!");

//Insira o valor
window.alert("Convertendo Celsius para Fahrenheit.");
let c = Number(prompt("Digite a temperatura em  Celsius"));

//calcular
let f = (c*9/5)+32;

//resultado

alert("Temperatura em Celsius é: " + c + "°C" +
    "\n Temperatura em Fahrenheit é: " + f + "°F");
