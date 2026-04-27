/*Desafio: Uma empresa de tecnologia paga seus programadores por hora. Peça ao
usuário para digitar: o número de horas trabalhadas no mês e o valor que ele recebe por
hora. Calcule e mostre o salário bruto. Em seguida, desconte 8% de impostos e mostre o
salário líquido final.*/

//saudações
window.alert("Seja bem-vindo(a) a lista de exercícios!");
window.alert("Para saber o salário bruto + o desconto do imposto + salário líquido, preencha:");

let horas = Number(prompt("Quantas horas você trabalha no mês?"));
let valorhora = Number(prompt("O valor que recebe por hora?"));

//calculo
//sb= salário bruto
let sb = horas * valorhora;
 
let desconto = 0.08;
let imposto = sb * desconto;

//sl= salário líquido
let sl = sb - imposto;

//Resultado

alert("Salário Bruto: R$ " + sb.toFixed(2) + " reais " +
    "\n Imposto (8%): " + imposto.toFixed(2) + " reais " +
    "\nSalário Líquido: R$ " + sl.toFixed(2) + " reais");




