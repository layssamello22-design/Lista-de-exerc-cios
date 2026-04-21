/*esafio: Elabore um programa que calcule o valor a ser pago por um produto,
considerando o preço normal de etiqueta e a escolha da condição de pagamento:
1. À vista no Pix ou Dinheiro: 10% de desconto.
2. À vista no Cartão de Crédito: 5% de desconto.
3. Em 2x no Cartão: Preço normal da etiqueta.
4. Em 3x ou mais no Cartão: 10% de juros sobre o preço normal.
• Dica: Crie um menu para o usuário escolher a opção de 1 a 4. Dependendo da
escolha, aplique a matemática correta sobre a variável do preço*/


window.alert("Vamos calcular o valor a ser pago em um produto de acordo com sua forma de pagamento");
function main(){

    let precoEtiqueta = Number(prompt("Insira o valor da etiqueta:"))
   let opcao = Number(prompt("Escolha a condição de pagamento:\n" +
        "1 - À vista (Pix ou Dinheiro): 10% de desconto\n" +
        "2 - À vista (Cartão de Crédito): 5% de desconto\n" +
        "3 - Em 2x no Cartão: Preço normal\n" +
        "4 - Em 3x ou mais no Cartão: 10% de juros"));

        let valorfinal;

       switch (opcao) {
        case 1:
            valorFinal = precoEtiqueta - (precoEtiqueta * 0.10);
            window.alert(`À vista no Pix/Dinheiro: O valor final é R$ ${valorFinal.toFixed(2)}`);
            break;
        
        case 2:
            valorFinal = precoEtiqueta - (precoEtiqueta * 0.05);
            window.alert(`À vista no Cartão: O valor final é R$ ${valorFinal.toFixed(2)}`);
            break;
        
        case 3:
            valorFinal = precoEtiqueta;
            window.alert(`Em 2x no Cartão: O valor final é R$ ${valorFinal.toFixed(2)}`);
            break;
        
        case 4:
            valorFinal = precoEtiqueta + (precoEtiqueta * 0.10);
            window.alert(`Em 3x ou mais no Cartão: O valor final é R$ ${valorFinal.toFixed(2)} (com juros)`);
            break;

        default:
            window.alert("Opção inválida! Escolha de 1 a 4.");
            break;
    }
}


    





