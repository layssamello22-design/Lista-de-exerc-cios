/*Desafio: Crie um vetor com 8 números, mas coloque propositalmente alguns números
repetidos (ex: [1, 2, 2, 3, 4, 4, 4, 5]). O programa deve criar um novo vetor
contendo os mesmos elementos, mas sem repetições (ex: [1, 2, 3, 4, 5]).
• Dica: Para cada elemento do vetor original, verifique se ele já existe no novo
vetor usando .includes(). Se não existir, adicione-o com o .push()*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Vetor.");
window.alert("Removendo números repetidos");

function main() {


    let numeros = [1, 2, 2, 3, 4, 4, 4, 5];
    let semRepetidos = [];

    for (let i = 0; i < numeros.length; i++) {
        if (!semRepetidos.includes(numeros[i])) {

            semRepetidos.push(numeros[i]);
        }
    }alert(
        "Vetor original: [" + numeros.join(", ") + "]" +
        "\nVetor sem repetição: [" + semRepetidos.join(", ") + "]"
    );
}




















function voltarMenu() {
    window.location.href = "../../index.html";
}