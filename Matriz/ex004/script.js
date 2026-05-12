/*4. A Diagonal Principal
Desafio: Crie uma matriz 3x3 ou 4x4. O programa deve extrair e exibir apenas os
números que compõem a diagonal principal da matriz (os elementos que cortam a
matriz do canto superior esquerdo para o inferior direito).
• Dica: Os elementos da diagonal principal têm uma característica única: o índice
da linha é exatamente igual ao índice da coluna (i === j).*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Matriz.");
window.alert("A Diagonal Principal");

function main() {

    let matriz = [
        [23, 53, 63, 11],
        [28, 33, 8, 4],
        [3, 4, 3, 20],
        [4, 5, 10, 15]
    ];
    let diagonal = " ";
    let saida = document.getElementById("saida");
    saida.innerHTML = "";

    for (let i = 0; i < matriz.length; i++) {
        for (let c = 0; c < matriz[i].length; c++) {
            saida.innerHTML += matriz[i][c] + " ";

            if (i === c){
                diagonal += matriz[i][c] + " ";
            }

        }

        saida.innerHTML += "<br>";

    }
    saida.innerHTML += `<br>Diagonal Principal:  ${ diagonal}`;
}