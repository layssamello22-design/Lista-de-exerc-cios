/*8. Verificador de Jogo da Velha (Linhas)
Desafio: Represente um tabuleiro de Jogo da Velha em uma matriz 3x3, preenchida
com "X", "O" ou vazia (""). Crie um script que verifique se algum jogador venceu
completando uma linha inteira (os três elementos da linha são iguais e não vazios).
• Dica: Para uma linha i, verifique se matriz[i][0] === matriz[i][1] e
matriz[i][1] === matriz[i][2].
*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Matriz.");
window.alert("Verificador de Jogo da Velha (Linhas)");

function main(){

    let matriz = [
        ["0", "X", "0"],
        ["0", "X", "0"],
        ["X", "X", "X"],
    ];

    let saida = document.getElementById("saida");
    saida.innerHTML = "";

    for (let i = 0; i < matriz.length; i++){

        for(let c = 0; c < matriz[i].length; c++){

            saida.innerHTML += matriz[i][c] + " ";
        }

            saida.innerHTML += "<br>";
    }
        for (let i = 0; i < matriz.length; i++){

            if (
                matriz[i][0] === matriz[i][1] &&
                matriz[i][1] === matriz[i][2] &&
                matriz[i][0] !== ""
            ){

                saida.innerHTML += "<br>Tem vencedor!";
            }
        }
}
 


















