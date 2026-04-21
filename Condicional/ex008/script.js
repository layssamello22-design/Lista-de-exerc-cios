/*Desafio: Crie um programa que leia um número de 1 a 7 e escreva o dia da semana
correspondente (1 = Domingo, 2 = Segunda-feira, etc.). Se o usuário digitar um número
fora desse intervalo, mostre a mensagem "Dia inválido".
• Dica: Este exercício é perfeito para treinar a estrutura switch/case em vez de
usar vários if/else. Lembre-se do break!*/

window.alert("Vamos descobrir que dia da semana é?");

function main(){
    let numero =Number(prompt("Informe um número de 1 a 7:"));
    
    switch (numero){
        case 1:
            window.alert("1 - Domingo");
        break;
        case 2:
            window.alert("2 - Segunda-feira");
        break;
        case 3:
            window.alert("3 - Terça-feira");
        break; 
        case 4:
            window.alert("4 - Quarta-feira");
        break; 
        case 5:
            window.alert("5 - Quinta-feira");
        break;
        case 6:
            window.alert("6 - Sexta-feira");
        break;
        case 7:
            window.alert("7 - Sábado");
        break;
        default:
        window.alert("Número Inválido, digite um número de 1 a 7.")
        break;
    }

}