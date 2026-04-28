/*7. Sequência de Fibonacci
Desafio: A sequência de Fibonacci começa com 0 e 1, e cada número seguinte é a soma
dos dois anteriores (0, 1, 1, 2, 3, 5, 8...). Faça um programa que mostre os primeiros 10
números dessa sequência.
• Dica: Você vai precisar de variáveis para guardar o número "atual", o "anterior"
e o "próximo".
*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Repetição.");
window.alert("Sequência de Fibonacci.");

function main(){
    let atual= 1;
    let anterior=0;
    let proximo;
    let texto= "";

    for(let i=0; i<10; i++){
        texto += anterior + "<br>";
        proximo = atual + anterior;
       anterior = atual;
       atual = proximo;
    }
    const saida = document.getElementById("saida");
    saida.innerHTML = texto;
    saida.classList.add("mostrar", "info");

}
function voltarMenu() {
    window.location.href = "../../index.html";
}