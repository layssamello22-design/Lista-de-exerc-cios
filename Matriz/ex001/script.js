/*1. A Tabela 3x3
Desafio: Crie um programa que declare uma matriz 3x3 preenchida com números
inteiros de 1 a 9. Em seguida, use laços de repetição (for aninhados) para exibir essa
matriz no console ou na tela, linha por linha.
• Dica: Um laço controlará as linhas (i) e o laço interno controlará as colunas (j).
Acesso: matriz[i][j].*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Matriz.");
window.alert("Tabela 3x3");

function main() {

    let matriz = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    let resultado = "";

    let saida = document.getElementById("saida");

    saida.innerHTML = "";

    for (let i = 0; i < matriz.length; i++) {

        for (let j = 0; j < matriz[i].length; j++) {

            resultado += matriz[i][j] + " ";
        }

        resultado += "<br>";
    }
    saida.innerHTML = resultado;

}