/*9. Transposição de Matriz
Desafio: Crie uma matriz 2x3 (2 linhas e 3 colunas). O programa deve gerar e exibir a
sua matriz transposta (que terá 3 linhas e 2 colunas). Na transposição, o que era linha
vira coluna e o que era coluna vira linha.
• Dica: O laço externo deve iterar sobre as colunas da matriz original, e o laço
interno sobre as linhas. O novo valor será matrizTransposta[j][i] =
matrizOriginal[i][j].*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Matriz.");
window.alert("Transposição de Matriz");

function main(){

   let matriz = [

    ["1","2","3"],
    ["6","8","9"]
   
    ];

    let saida = document.getElementById("saida");
    saida.innerHTML = "";

    let transposta = [];

    saida.innerHTML += `<br> Matriz 2x3: <br><br>`;


    for (let i = 0; i < matriz.length; i++){

        for (let c = 0; c < matriz[i].length; c++){

            saida.innerHTML += matriz[i][c] + " ";
        }

        saida.innerHTML += "<br>";
    } 

     
     for (let c = 0; c < matriz[0].length; c++){

            transposta.push([]);

            for (let i = 0; i < matriz.length; i++){

                transposta[c].push(matriz[i][c]);
        }
     }

    saida.innerHTML += `<br> Matriz transposta 3x2: <br><br>`;

     for (let i = 0; i < transposta.length; i++){

        for (let c = 0; c < transposta[i].length; c++){

            saida.innerHTML += transposta[i][c] + " ";
        }

        saida.innerHTML += "<br>";
    }
}