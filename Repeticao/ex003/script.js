/*Soma dos Números
Desafio: Solicite ao usuário um número inteiro positivo N. O programa deve calcular e
mostrar a soma de todos os números de 1 até N. (Ex: Se N for 5, a soma será
1+2+3+4+5 = 15).
• Dica: Crie uma variável soma valendo 0 fora do laço e vá somando o valor do
contador a ela dentro do laço.*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Repetição.");
window.alert("Soma de todos os números.");

function main(){
    let numero = Number(prompt("Digite um número positivo:"));
    let soma=0;
    let texto= "";

    for (i=1; i <= numero; i++){
    soma += i;
    texto += i;

     if (i < numero){
            texto += "+";
    }

    document.getElementById("saida").innerHTML = `${texto} = ${soma}`;
    }
     saida.classList.add("mostrar", "info");
}

function voltarMenu() {
    window.location.href = "../../index.html";
}

