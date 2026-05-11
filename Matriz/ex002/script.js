/*2. A Soma de Todos os Elementos
Desafio: Declare uma matriz 3x3 com números aleatórios. Crie um script que percorra
todos os elementos dessa matriz, calcule a soma total de todos os valores e exiba o
resultado.
• Dica: Crie uma variável soma = 0 antes dos laços e vá adicionando o valor de
cada matriz[i][j] a ela.*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Matriz.");
window.alert("Soma dos elementos da matriz");

function main() {

    let matriz = [
        [23, 53, 63],
        [28, 33, 8],
        [3, 4, 3]
    ];

    let soma = 0;
    let saida = document.getElementById("saida");
    saida.innerHTML = "";

    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            saida.innerHTML += matriz[i][j] + " ";
            soma += matriz[i][j];
        }

        saida.innerHTML += "<br>";
    }

    saida.innerHTML += "<br>Soma total: " + soma;
}