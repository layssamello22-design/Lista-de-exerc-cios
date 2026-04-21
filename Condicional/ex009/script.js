/*Desafio: Solicite ao usuário que digite dois números e, em seguida, pergunte qual
operação ele deseja realizar: +, -, * ou /. O programa deve realizar a operação escolhida
e exibir o resultado. Caso o usuário digite um símbolo inválido, exiba um erro.
• Dica: Outro ótimo caso para usar o switch, avaliando a variável que guarda a
string da operação. Cuidado especial com a divisão por zero!
*/
function main() {

    //Saudações
    window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Condicional.");

    //Interação com o usuário
    window.alert("Digite dois número, por favor.");
    let n1 = Number(prompt("Número 1:"));
    let n2 = Number(prompt("Número 2:"));

    let operacao = prompt("Qual operação deseja realizar (+, -, *, /)?");

    //Calculo
//soma
if (operacao === "+"){ 
    let soma = n1 + n2;
    window.alert(`O resultado da soma é: ${soma}.`);
}
//subtraçao
else if (operacao === "-"){
    let subtracao = n1 - n2;
    window.alert(`O resultado da subtração é: ${subtracao}.`);
}
 //Multiplicação
else if (operacao === "*"){
    let Multiplicacao = n1 * n2;
    window.alert(`resultado da multiplicação é: ${Multiplicacao}.`); 
 }
 //Divisáo
else if (operacao === "/"){
    if (n2 !==0) { 
    let divisao = n1 / n2;
    window.alert(`O resultado da divisáo é: ${divisao}.`);   
 }
    else {
        window.alert("Não é possivel dividir por zero.");
    } }
//erro
else {
    window.alert("Operação Inválida! Tenta novamente.");
     }
}
