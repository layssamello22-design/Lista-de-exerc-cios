/*Desafio: Crie um vetor com 10 números aleatórios (ou peça para o usuário digitar). Em
seguida, o programa deve criar um novo vetor apenas com os números pares
encontrados no primeiro vetor e exibi-lo na tela.
• Dica: Você pode usar um laço for com um if dentro (verificando o resto da
divisão por 2) ou tentar o método avançado .filter().
*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Vetor.");
window.alert("Números pares!");

function main(){

    let vetorNumero = [];
    let pares = [];

    for (let i = 0; i < 10; i++) {

        let numero = Number(prompt(`Digite o ${i + 1}º número:`));

        vetorNumero.push(numero);

        if (numero % 2 == 0) {
            pares.push(numero);
        }
    }

    let saida = document.getElementById("saida");

    saida.innerHTML = `
        Números digitados: ${vetorNumero.join(", ")} <br><br>

        <strong>Números pares:</strong> ${pares.join(", ")}
    `;
}

// voltar a tela anterior 
function voltarMenu() {
    window.location.href = "../../index.html";

}















