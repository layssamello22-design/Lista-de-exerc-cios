/*Desafio: Peça ao usuário o comprimento de três retas. O programa deve verificar se
essas três retas podem formar um triângulo. Se puderem, informe qual tipo de triângulo
será formado:
• Equilátero: Todos os lados iguais.
• Isósceles: Dois lados iguais.
• Escaleno: Todos os lados diferentes.
• Regra matemática: Para formar um triângulo, a soma de dois lados deve ser
sempre maior que o terceiro lado.*/

window.alert("Informe o comprimento de três retas para descobrirmos se pode ser um triângulo:");

function main(){
let reta1 = Number(prompt("Digite o comprimento da 1° reta:"));
let reta2 = Number(prompt("Digite o comprimento da 2° reta:"));
let reta3 = Number(prompt("Digite o comprimento da 3° reta:"));

if (reta1 < reta2 + reta3 && reta2 < reta1 + reta3 && reta3 < reta2 + reta1)  {
    if (reta1 === reta2 && reta3 === reta2){ 
         window.alert("É um equilátero, todas os lados são iguais.")
    }  
    else if (reta1 === reta2 ||  reta3 === reta2 ||  reta1 === reta3){
        window.alert("É um Isósceles, dois lados são iguais.")
    }
    else {
        window.alert("É um escaleno, todos os lados são diferente.")
    }
}
else {
    window.alert("Essa médida NÃO pode formar um triângulo.")
}
}

