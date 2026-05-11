/*Desafio: Crie dois vetores de 3 posições cada, preenchidos com números diferentes.
Crie um terceiro vetor que seja a união dos dois primeiros, resultando em um vetor de 6
posições. Mostre o terceiro vetor na tela.
• Dica: O JavaScript possui um método perfeito para isso chamado .concat(),
ou você pode usar o Spread Operator (...).
*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Vetor.");
window.alert("União de Vetores");

function main() {

    
    let vetor1 = [15, 23, 30];
    let vetor2 = [14, 10, 20];
    let vetor3 = vetor1.concat(vetor2);

    alert(
        "Vetor 1: [" + vetor1.join(", ") + "]" +
        "\nVetor 2: [" + vetor2.join(", ") + "]" +
        "\nVetor unido: [" + vetor3.join(", ") + "]"
    );
}
















function voltarMenu() {
    window.location.href = "../../index.html";
}