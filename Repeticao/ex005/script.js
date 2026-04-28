/*Desafio: Crie um programa que peça ao usuário para definir uma senha. Em seguida,
peça para ele digitar a senha para fazer o login. Enquanto a senha digitada for diferente
da senha definida, o programa deve mostrar "Senha incorreta, tente novamente" e pedir
a senha de novo. Quando acertar, mostre "Acesso concedido!".
• Dica: Essa é a situação ideal para usar o while (enquanto a senha estiver errada,
continue pedindo).*/

window.alert("Bem-vindo a LISTA de exercícios \n\n Utilizando Repetição.");
window.alert("Definindo uma senha.");

  function main(){

    let usuario;
    let senha;

    while (true){

       let  usuario = prompt("Crie uma senha:");
       if (usuario === null) return;
       let  senha = prompt("Digite a senha para entrar:");
       if (usuario === null) return;

        while (usuario !== senha){
            let escolha = prompt(
                "Senha incorreta!\n\n" +
                "1 - Tentar novamente\n" +
                "2 - Criar nova senha"
            );
            if (escolha === null) return;

            if (escolha === "2"){
                break; 
            }

            senha = prompt("Digite a senha:");
            if (escolha === null) return;
        }
            if (usuario === senha){
            break;
        }
    }

    document.getElementById("saida").innerHTML = "<strong>✔ Acesso concedido!</strong>";
     saida.classList.add("mostrar", "info");
}

function voltarMenu() {
    window.location.href = "../../index.html";
}

