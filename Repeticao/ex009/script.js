/*9. Maior e Menor Idade
Desafio: Faça um programa que leia a idade de 5 pessoas. Ao final do laço, o programa
deve mostrar qual foi a maior e qual foi a menor idade digitada.
• Dica: Inicialize a variável maiorIdade com 0 e menorIdade com um valor bem
alto (como 999), ou defina ambas com o valor da primeira idade digitada.*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Repetição.");
window.alert("Insira o valor de 5 idades:");

function main(){
let maior = 0;
let menor = 999;

for (i=1; i<=5; i++){
let entrada = prompt(`Insira a idade ${i}°:`);
if (entrada === null){
    return; 
}
let idade = Number(entrada);

if (idade > maior){
    maior = idade;
}
if (idade < menor){
    menor = idade;
}
}
const saida = document.getElementById("saida");

    saida.innerHTML = `
        Maior idade: ${maior} <br>
        Menor idade: ${menor}`;

    saida.classList.add("mostrar", "info");
}

function voltarMenu() {
    window.location.href = "../../index.html";
}





