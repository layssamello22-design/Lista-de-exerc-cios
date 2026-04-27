/* Saudação do Sistema
Desafio: Crie um programa que pergunte que horas são (apenas números inteiros de 0 a
23).
• Entre 0 e 11: Diga "Bom dia!"
• Entre 12 e 17: Diga "Boa tarde!"
• Entre 18 e 23: Diga "Boa noite!"
• Outros valores: "Hora inválida."
• Dica: Você precisará usar operadores lógicos (&&) para verificar se a hora está
dentro de um intervalo (ex: hora >= 12 && hora <= 17).
*/

window.alert("Vamos vizualizar quais são as saudações do sistema")
function main(){ 
let horas = Number(prompt("Que horas são?"));

if (horas.toFixed(1) >= 0 && horas.toFixed(1) <=11) {
    window.alert("Bom dia!");
} else if (horas.toFixed(1) >= 12 && horas.toFixed(1) <=17){
    window.alert("Boa tarde!");
} else if (horas.toFixed(1) >=18 && horas.toFixed(1) <=23){
    window.alert("Boa noite!");
} else {
    window.alert("Hora Inválida");
}
}
