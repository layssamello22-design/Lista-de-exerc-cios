/*5. Soma das Linhas
Desafio: Crie uma matriz 3x4 (3 linhas e 4 colunas). Faça um programa que calcule e
mostre a soma dos elementos de cada linha separadamente. (Ex: "A soma da linha 0 é
X, da linha 1 é Y...").
• Dica: A variável de soma deve ser zerada no início do laço externo, logo antes
de entrar no laço interno das colunas.*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Matriz.");
window.alert("Soma das linhas");

function main() {

    let matriz = [
        [23, 53, 63, 11],
        [28, 33, 8, 4],
        [3, 4, 3, 20]
    ];

    let saida = document.getElementById("saida");
    saida.innerHTML = "";

    for (let i = 0; i < matriz.length; i++) {

         let soma = 0;

        for (let c = 0; c < matriz[i].length; c++) {

            saida.innerHTML += matriz[i][c] + " ";

            soma += matriz[i][c];
        }

        saida.innerHTML += `<br>Soma linha ${i}: ${soma}<br><br>`;
    }
    
}
