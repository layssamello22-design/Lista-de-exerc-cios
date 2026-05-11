/*Desafio: Peça para o usuário digitar 5 números (você pode usar um laço e o método
.push() para ir guardando no vetor). Depois, o programa deve varrer o vetor e dizer
qual foi o maior e qual foi o menor número digitado.
• Dica: Inicialize as variáveis maior e menor com o primeiro elemento do vetor
(vetor[0]) e vá comparando os próximos.*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Vetor.");
window.alert("Maior e menor número!");

function main(){

    let vetorInteiro = [];
    for (let i = 0; i < 5; i++) {

        let numero = Number(prompt(`Digite o ${i + 1}º número:`));

        vetorInteiro.push(numero);
    }
    let maior = vetorInteiro[0];
    let menor = vetorInteiro[0];

    for (let i = 0; i < vetorInteiro.length; i++) {

        if (vetorInteiro[i] > maior) {
            maior = vetorInteiro[i];
        }

        if (vetorInteiro[i] < menor) {
            menor = vetorInteiro[i];
        }
    }

    let saida = document.getElementById("saida");

    saida.innerHTML = `
        Números digitados: ${vetorInteiro.join(", ")} <br><br>

        <strong>Maior número:</strong> ${maior} <br>
        <strong>Menor número:</strong> ${menor}
    `;
}

// voltar a tela anterior 
function voltarMenu() {
    window.location.href = "../../index.html";

}