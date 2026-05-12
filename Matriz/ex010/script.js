/*10. Reserva de Poltronas (Cinema)
Desafio: Crie uma matriz 5x5 representando as poltronas de um pequeno cinema.
Inicialize todas as posições com "Livre". Faça um laço (como um while) que pergunte
ao usuário qual linha e coluna ele deseja reservar. Se estiver "Livre", mude para
"Ocupada". Se já estiver "Ocupada", mostre um aviso. O laço termina quando o usuário
digitar valores negativos.
• Dica: É uma ótima oportunidade de juntar estrutura de repetição, matrizes e
interatividade simulando um sistema real!*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Matriz.");
window.alert("Reserva de Poltronas");

function main() {

    let cinema = [

    ["🟩1", "🟥2", "🟥4", "🟩5", "🟩6"],
    ["🟥7", "🟥8", "🟥9", "🟥10", "🟥11"],
    ["🟥12", "🟥13", "🟩14", "🟩15", "🟩16"],
    ["🟩17", "🟩18", "🟥19", "🟥20", "🟩21"],
    ["🟩22", "🟥23", "🟥24", "🟥25", "🟥26"]

];

    let saida = document.getElementById("saida");

   let mensagem = "";

    while (true) {

    saida.innerHTML = "";

    saida.innerHTML += mensagem + "<br><br>";

    for (let i = 0; i < cinema.length; i++) {

        for (let c = 0; c < cinema[i].length; c++) {

            saida.innerHTML += cinema[i][c] + " ";
        }

        saida.innerHTML += "<br><br>";
    }

    let linha = Number(prompt("Digite a linha:"));
    let coluna = Number(prompt("Digite a coluna:"));

    if (linha < 0 || coluna < 0) {

        break;
    }

    if (cinema[linha][coluna].includes("🟩")) {

        cinema[linha][coluna] =
        cinema[linha][coluna].replace("🟩", "🟥");

        mensagem = "Reserva realizada!";
    }
    else {

        mensagem = "Poltrona já ocupada!";
        }
    }
}