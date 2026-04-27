/*2. A Tabuada
Desafio: Peça ao usuário para digitar um número inteiro. O programa deve usar um laço
de repetição para calcular e exibir a tabuada desse número (de 1 a 10).
• Dica: Use um for que vá de 1 até 10 e multiplique o número digitado pelo
contador do laço em cada volta.*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Repetição.");
window.alert("Tabuada com números inteiros.");

function main(){
    let multiplicado= Number(prompt("Digite um número:"));
        if (isNaN(multiplicado)){
            alert("Digite um número válido!");
            return;
        }
    let saida = document.getElementById("saida");
    saida.innerHTML = "";
    for (let i = 0; i <= 10; i++){
        let resultado =multiplicado * i;
        saida.innerHTML += `<p>${multiplicado} x ${i}  = ${resultado}</p>`;

    }
 }

   

