/*Desafio: Crie um script que leia o nome de um aluno e suas três notas do semestre.
Calcule a média aritmética entre elas e mostre uma mensagem amigável com o
resultado final.*/
//Saudaçoes
window.alert('Seja bem-vindo(a) a lista de exercícios!');
alert('Vamos calcular a média semestral do aluno.');

//Chame o nome de um aluno
let nome = (prompt("Insira o nome do Aluno:"));

let nota1 = Number(prompt("Insira a 1° nota do Aluno:"));
let nota2 = Number(prompt("Insira a 2° nota do Aluno:"));
let nota3 = Number(prompt("Insira a 3° nota do Aluno:"));

//calcular a média
let soma = nota1 + nota2 + nota3;
let media = soma / 3;
let resultado;

if (media > 6){
    resultado  = "Parbéns " +nome+ " você foi Aprovado";
} else {
    resultado = "Infelizmente " +nome+ " você foi Reprovado. Estude mais!";
}

//Resultado
alert("O aluno: " + nome + 
    "\nMédia: " + media.toFixed(2) +
    "\nResultado: " + resultado );