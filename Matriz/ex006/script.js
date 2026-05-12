/*6. Multiplicando por um Escalar
Desafio: Peça ao usuário um número inteiro (o multiplicador escalar). Declare uma
matriz 2x2. O programa deve multiplicar todos os elementos da matriz pelo número
digitado e gerar uma nova matriz com os resultados, exibindo-a no final.
• Dica: Para criar uma nova matriz em JavaScript dinamicamente, você precisará
dar um .push([]) (inserir um vetor vazio) para cada nova linha antes de
preencher as colunas.*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Matriz.");
window.alert("Multiplicando por um Escalar");

function main() {

    let inteiro = Number(prompt("Digire um número inteiro:"));

    let matriz = [
        [1, 2, 3, 5],
        [6, 7, 8, 4]
    ];

    let novaMatriz = [];

    let saida = document.getElementById("saida");
    saida.innerHTML = "";

    for (let i = 0; i < matriz.length; i++) {

        novaMatriz.push([]);

        for (let c = 0; c < matriz[i].length; c++) {

            novaMatriz[i].push(matriz[i][c] * inteiro);

        }
    }
    
    saida.innerHTML += "Matriz original:<br><br>";

    for (let i = 0; i < matriz.length; i++) {

        for (let c = 0; c < matriz[i].length; c++) {

            saida.innerHTML += matriz[i][c] + " ";
        }

        saida.innerHTML += "<br>";
    }

    saida.innerHTML += "<br>Matriz multiplicada:<br><br>";

    for (let i = 0; i < novaMatriz.length; i++) {

        for (let c = 0; c < novaMatriz[i].length; c++) {

            saida.innerHTML += novaMatriz[i][c] + " ";
        }

        saida.innerHTML += "<br>";
    }
}
