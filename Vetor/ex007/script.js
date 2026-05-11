/*Desafio: Crie um programa que armazene as notas de 5 alunos em um vetor. Calcule a
média geral da turma. Em seguida, o programa deve varrer o vetor novamente e mostrar
quantos alunos ficaram com a nota acima da média geral.
• Dica: Você vai precisar de dois laços de repetição (ou passar pelo vetor duas
vezes): um para calcular a soma/média e outro para contar quem ficou acima
dela.
*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Vetor.");
window.alert("Bem-vindo ao sistema de notas!");

function main() {

    let notas = [];
    let soma = 0;

    for (let i = 0; i < 5; i++) {

        let nota = Number(prompt(`Digite a nota do aluno ${i + 1}:`));

        notas.push(nota);

        soma += nota;
    }
    let media = soma / notas.length;

    let acimaMedia = 0;

    for (let i = 0; i < notas.length; i++) {

        if (notas[i] > media) {
            acimaMedia++;
        }
    }

    alert(
        "Notas da turma: " + notas.join(", ") +
        "\nMédia geral: " + media.toFixed(2) +
        "\nAlunos acima da média: " + acimaMedia
    );
}



function voltarMenu() {
    window.location.href = "../../index.html";
}