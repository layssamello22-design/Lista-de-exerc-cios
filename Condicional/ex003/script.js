/*Desafio: Peça ao usuário que insira duas notas. Calcule a média.
• Se a média for maior ou igual a 7.0, mostre "Aprovado".
• Se a média for entre 5.0 e 6.9, mostre "Em Recuperação".
• Se for menor que 5.0, mostre "Reprovado".
• Dica: Utilize a estrutura if, else if e else para encadear as verificações.
*/

window.alert("Vamos calcular a média de um aluno.")


function main(){
let n1=Number(prompt("Insira a 1° nota"));
let n2=Number(prompt("Insira a 2° nota"));
let soma= n1+n2;
let media= soma/2;

if (media>=7){
    window.alert("Aprovado");
} else if (media.toFixed(1) >= 5 && media.toFixed(1) <=6.9){
    window.alert("Em Recuperação");
}else { 
      window.alert("Reprovado");
}
}