/*Desafio: Crie um vetor com 5 nomes de frutas. Peça para o usuário digitar o nome de
uma fruta que ele quer buscar. O programa deve dizer se a fruta existe no vetor e em
qual posição ela está. Se não existir, mostre "Fruta não encontrada".
• Dica: Você pode percorrer o vetor com um laço para comparar as strings ou usar
o método .indexOf().*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Vetor.");
window.alert("Buscando uma fruta!");

function main(){

    let vetorFrutas = ["morango", "abacaxi", "uva", "laranja", "manga"];

    
    let fruta = prompt("Digite o nome de uma fruta:");

    
    let posicao = vetorFrutas.indexOf(fruta);

    let saida = document.getElementById("saida");

    
    if (posicao != -1) {

        saida.innerHTML = `
            Frutas existentes: ${vetorFrutas.join(", ")} <br><br>

            <strong>A fruta "${fruta}" foi encontrada na posição ${posicao}.</strong>
        `;

    } else {

        saida.innerHTML = `
            Frutas existentes: ${vetorFrutas.join(", ")} <br><br>

            <strong>Fruta não encontrada.</strong>
        `;
    }
}

// voltar a tela anterior 
function voltarMenu() {
    window.location.href = "../../index.html";
}