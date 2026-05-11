/*Desafio: Crie um programa que declare um vetor com os nomes de 5 amigos. Em
seguida, use um laço de repetição (for) para exibir o nome de cada amigo na tela, um
por linha.
• Dica: Lembre-se que o primeiro elemento de um vetor no JavaScript fica na
posição (índice) 0. Use a propriedade .length para saber o tamanho do vetor.
*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Vetor.");
window.alert("Nome de 5 amigos!");

function main(){

let vetorAmigos = ["Layssa", "Lohayne", "Rayane", "Lélia", "José Carlos"];

let saida = document.getElementById("saida");

saida.innerHTML = "";

for (let i = 0; i < vetorAmigos.length; i++) {
    saida.innerHTML += vetorAmigos[i] + "<br>";
}

}

    
function voltarMenu() {
    window.location.href = "../../index.html";
}