/*Desafio: Crie um programa que leia 5 números e os guarde em um vetor. Em seguida, o
programa deve mostrar os elementos do vetor na ordem inversa (do último para o
primeiro).
• Desafio extra: Tente fazer isso usando um laço for reverso (come*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Vetor.");
window.alert("Mostrar números na ordem inversa!");

function main() {

    let numeros = [];

    for (let i = 0; i < 5; i++) {
        let numero = Number(prompt(`Digite o ${i + 1}º número:`));
        numeros.push(numero);
    }

    let saida = document.getElementById("saida");
    saida.innerHTML = "";
    saida.innerHTML += `<p>Números digitados: ${numeros.join(", ")}</p>`;
    saida.innerHTML += `<p>Ordem inversa:</p>`;

    for (let i = numeros.length - 1; i >= 0; i--) {
        saida.innerHTML += `${numeros[i]} `;
    }
    saida.innerHTML += `</p>`;
}

function voltarMenu() {
    window.location.href = "../../index.html";
}