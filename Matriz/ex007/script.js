/*7. A Matriz Identidade
Desafio: Crie um programa que gere e exiba uma Matriz Identidade de tamanho N x N
(onde N é escolhido pelo usuário). Uma matriz identidade é preenchida com 1 na
diagonal principal e 0 em todas as outras posições.
• Dica: Use um if dentro dos laços: se i === j, coloque 1; senão, coloque 0.
*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Matriz.");
window.alert("A Matriz Identidade");

function main() {

    let tamanho= Number(prompt("Digite o tamanho da matriz:"));

    let resultado = " ";

    let saida = document.getElementById("saida");
    saida.innerHTML = "";

    for (let i = 0; i < tamanho; i++) {

        for (let c = 0; c < tamanho; c++) {
            if (i === c){

             resultado += "1" ;

             } else {

             resultado += "0";
             }
        }

        resultado += "<br>"; 

    }

   saida.innerHTML = resultado;
}