/*1. Par ou Ímpar?
Desafio: Crie um programa que peça ao usuário para digitar um número inteiro. O
programa deve verificar se o número é par ou ímpar e exibir uma mensagem
correspondente.
• Dica: O operador de módulo (%) será o seu melhor a*/


 
    window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Condicional.");
    window.alert("Vamos descobrir se um número é par ou ímpar.");

    function main(){
        let numero = Number(prompt("Digite um número inteiro:"));

        if (numero % 2 === 0 ){
            window.alert(`O número ${numero} é par.`);

        }else {
            window.alert(`O número ${numero} é ímpar.`);
        }
    }
