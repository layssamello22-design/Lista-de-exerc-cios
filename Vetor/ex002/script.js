/*Desafio: Declare um vetor contendo 5 números inteiros. Crie um script que percorra
esse vetor e calcule a soma de todos os seus valores, exibindo o resultado final.
• Dica: Crie uma variável soma valendo 0 fora do laço e vá adicionando vetor[i]
a ela dentro do laço.*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Vetor.");
window.alert("A soma de todos os números declarados!");

function main(){

    let vetorInteiro = [23, 33, 27, 52, 63];

    let saida = document.getElementById("saida");

    saida.innerHTML = "";

    let soma = 0;

    for (let i = 0; i < vetorInteiro.length; i++) {

        soma = soma + vetorInteiro[i];
    }

    saida.innerHTML = `
        Números inteiros são: ${vetorInteiro.join(", ")} <br><br>
        <strong>Soma: ${soma}</strong>
    `;
}

// voltar a tela anterior 
function voltarMenu() {
    window.location.href = "../../index.html";
}