/*Desafio: Crie um script que pergunte o ano de nascimento do usuário e o ano atual.
Calcule a idade e informe se ele já tem idade para tirar a Carteira Nacional de
Habilitação (CNH) no Brasil (18 anos ou mais).
• Dica: Use um if para idades >= 18 e um else para idades menores.*/

window.alert("Seja bem-vindo, aos exercícios utilizando condicional."); 
window.alert("Vamos descobri se você usuário pode ou não tirar sua CNH."); 


function main(){ 
      
    let nasceu = Number(prompt("Em que ano você nasceu?"));
    let ano = Number(prompt("Qual é o ano atual?"));
    let idade = ano - nasceu;
if (idade >= 18){
    window.alert("Parabéns você já pode tirar sua CNH");    
}else{
    window.alert("Desculpa, você é menor de idade, não pode tirar sua CNH. ");
}
}



