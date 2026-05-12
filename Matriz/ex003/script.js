/*3. O Maior da Tabela
Desafio: Dada uma matriz 4x4 preenchida com números diversos, faça um programa
que encontre e mostre qual é o maior valor presente nela.
• Dica: Inicialize a variável maior com o primeiro elemento da matriz
(matriz[0][0]) e compare-o com todos os outros durante a varredura.
*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Matriz.");
window.alert("O Maior da Tabela!");

function main() {

    let matriz = [
        [23, 53, 63, 11],
        [28, 33, 8, 4],
        [3, 4, 3, 20],
        [4, 5, 10, 15]
    ];
    let maior = matriz[0][0];
    let saida = document.getElementById("saida");
    saida.innerHTML = "";

    for (let i = 0; i < matriz.length; i++) {
        for (let c = 0; c < matriz[i].length; c++) {
            saida.innerHTML += matriz[i][c] + " ";

            if (matriz[i][c] > maior){
                maior = matriz[i][c];
            }

        }

        saida.innerHTML += "<br>";

    }
    saida.innerHTML += `<br>Maior Número:  ${ maior}`;
}