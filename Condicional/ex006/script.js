/*1Desafio: Peça o peso (kg) e a altura (m) do usuário. Calcule o Índice de Massa Corporal
(IMC = peso / (altura * altura)) e mostre a classificação:
• Abaixo de 18.5: Abaixo do peso
• Entre 18.5 e 24.9: Peso normal
• Entre 25.0 e 29.9: Sobrepeso
• Acima de 30.0: Obesidade
• Dica: Arredonde o resultado do IMC usando o método .toFixed(2) antes de
exibir para o usuário*/

window.alert("Calcule o Índice de Massa Corporal.");

function main(){
let peso = Number(prompt("Qual o seu peso?"));
let altura = Number(prompt("Qual a sua altura?"));

let imc = peso / (altura * altura);

if (imc < 18.5 ){
    window.alert(`IMC = ${imc.toFixed(2)} - Abaixo do peso!`);

} else if (imc >= 18.5 && imc <= 24.9) {
    window.alert(`IMC = ${imc.toFixed(2)} - Peso Normal!`);

} else if (imc >= 25.00 && imc <= 29.9){
    window.alert(`IMC = ${imc.toFixed(2)} - Sobrepeso!`);

} else {
    window.alert(`IMC = ${imc.toFixed(2)} - Obesidade!`);
}
}

