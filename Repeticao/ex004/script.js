/*4. Somente os Pares
Desafio: Faça um programa que exiba na tela todos os números pares compreendidos
entre 1 e 50.
• Dica: Você pode fazer o laço pular de 2 em 2 (i += 2) ou usar a estrutura
condicional com o operador de módulo (i % 2 === 0) dentro do laço.*/


window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Repetição.");
window.alert("Todos os número pares entre 1 e 50.");

function main(){
    let par="";

    for(let i = 1; i <= 50; i++){
       if (i % 2 ===0 ) 
       par += i + " ";
    }
    document.getElementById("saida").innerHTML = `O números pares entre 1 e 50 são: ${par}`;
    console.log(1)
    saida.classList.add("mostrar", "info");
}

function voltarMenu() {
    window.location.href = "../../index.html";
}
