/*O Fatorial
Desafio: Peça ao usuário um número inteiro e calcule o fatorial desse número. (Ex:
Fatorial de 5 é 5 * 4 * 3 * 2 * 1 = 120).
• Dica: Use um laço de repetição que comece no número digitado e vá
decrescendo até 1, multiplicando o resultado a cada volta.*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Repetição.");
window.alert("Calcule o Fatorial de um número inteiro:");

function main(){
    let numero = Number(prompt("Digite um número:"));

    let fatorial = 1;
    let texto = "";

    for (let i = numero; i >= 1; i--){
        fatorial *= i;
        texto += i;

        if (i > 1){
            texto += " * ";
        }
    }
    const saida = document.getElementById("saida");
    saida.innerHTML = `Fatorial do ${numero} é: ${texto} = ${fatorial}`;

    saida.classList.add("mostrar", "sucesso");
}


function voltarMenu() {
    window.location.href = "../../index.html";
}

