/*1. Contagem Regressiva do Foguete
Desafio: Crie um programa que mostre na tela uma contagem regressiva para o
lançamento de um foguete, começando em 10 e terminando em 0, e depois exiba
"DECOLAGEM!".
• Dica: Um laço for ou while subtraindo 1 a cada iteração (i--) resolve esse
problema perfeitamente.*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Repetição.");
window.alert("Contagem Regressiva!.");

function main(){
    let numeros = [];

    for (let i = 10; i >= 0; i--){
        numeros.push(i);
    }

    let saida = document.getElementById("saida");
    saida.innerHTML = ""; 

    for (let i = 0; i < numeros.length; i++){
        saida.innerHTML += numeros[i] + "<br>";
    }

    saida.innerHTML += "DECOLAGEM!";
}

