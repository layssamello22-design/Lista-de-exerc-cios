/*8. Caixa Registradora Infinita
Desafio: Crie um programa que leia o preço de vários produtos comprados por um
cliente. O programa deve parar de pedir novos preços quando o usuário digitar o valor 0
(zero). No final, mostre o valor total da compra.
• Dica: Você pode usar um do...while para garantir que ele peça o preço pelo
menos uma vez, ou um while(preco !== 0).*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Repetição.");
window.alert("Insira o preço dos produtos que comprou.");

function main(){

    let preco = Number(prompt("Digite o preço do produto (0 pra sair)"));
    let total = 0;

    while (preco !== 0){
       total += preco;
        preco = Number(prompt("Digite o preço do produto (0 pra sair)"));  
    }
       
    const saida = document.getElementById("saida");
    saida.innerHTML=`Total da compra: R$ ${total}`;
    saida.classList.add("mostrar", "info");
}
function voltarMenu() {
    window.location.href = "../../index.html";
}