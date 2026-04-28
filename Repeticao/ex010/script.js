/*10. O Jogo da Adivinhação
Desafio: O computador deve "pensar" em um número aleatório entre 1 e 10 (você pode
usar Math.random()). O usuário deve tentar adivinhar qual foi o número sorteado. A
cada palpite, o programa deve dizer se o usuário "Errou" e pedir um novo palpite.
Quando o usuário acertar, mostre "Parabéns, você acertou em X tentativas!".
• Dica: Use uma variável contadora fora do laço para registrar quantas vezes o
usuário tentou antes de acertar.
• a variável do preço.*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Repetição.");
window.alert("Jogo da adivinhação");

function main(){

let palpite= 0;
let cont = 0;
let secreto= Math.floor(Math.random() * 10 )+ 1;

while (palpite !== secreto){    
    palpite = parseInt(prompt("Tente adivinhar um número de 1 a 10:"));
    cont++;

    if (palpite === secreto){
         window.alert(`Parabnes! Voce acerto em ${cont} tentativas!` );
        }    
    else {
         window.alert("Errou! Tente Novamente.");
        }
    }
}
function voltarMenu() {
    window.location.href = "../../index.html";
}
