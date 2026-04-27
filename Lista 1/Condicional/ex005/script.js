/*Desafio: Peça ao usuário para informar um ano (ex: 2024). O programa deve dizer se
aquele ano é bissexto ou não.
• Regra: Um ano é bissexto se for divisível por 4. Porém, se for divisível por 100,
não é bissexto, a menos que também seja divisível por 400.
• Dica: Esse é um ótimo exercício para treinar uma condição composta com &&
(E) e || (OU) na mesma linha.
*/
 
window.alert("Vamos descobrir se o ano é bissexto");

function main(){
let ano = Number(prompt("Informe um ano, por favor"));

if ((ano % 4 === 0 && ano % 100 !== 0 ) || (ano % 400 === 0)){
    window.alert(`O ano ${ano} é bissexto!`);

}else{
    window.alert(`O ano ${ano} não é bissexto!`);
}
}