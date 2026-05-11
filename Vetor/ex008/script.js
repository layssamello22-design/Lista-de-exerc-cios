/*Desafio: Peça ao usuário um número inteiro base e uma quantidade de múltiplos que ele
deseja ver. O programa deve gerar um vetor contendo os primeiros N múltiplos desse
número e exibi-lo. (Ex: Base 3, Quantidade 5 -> Vetor: [3, 6, 9, 12, 15]).
• Dica: Use um laço que rode a quantidade de vezes pedida e vá dando um
.push() no resultado da multiplicação.*/


window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Vetor.");
window.alert("Gerador de múltiplos");

function main() {

    let base = Number(prompt("Digite o número base:"));
    let quantidade = Number(prompt("Quantos múltiplos deseja ver?"));

    let multiplos = [];
    for (let i = 1; i <= quantidade; i++) {
        multiplos.push(base * i);
    } alert(
        "Número base: " + base +
        "\nQuantidade de múltiplos: " + quantidade +
        "\nVetor: [" + multiplos.join(", ") + "]"
    );
}

function voltarMenu() {
    window.location.href = "../../index.html";
}