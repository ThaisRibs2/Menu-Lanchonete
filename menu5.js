function menu() {
    let opcao = Number(prompt(`Escolha uma opção do menu:
[1] - Salgados
[2] - Bebidas
[3] - Lanches
[4] - Sobremesas
[5] - Sair
`));

    switch (opcao) {
        case 1:
            escolherSalgado();
            break;

        case 2:
            escolherBebida();
            break;

        case 3:
            escolherLanche();
            break;

        case 4:
            escolherSobremesa();
            break;

        case 5:
            alert("Saindo do menu...");
            return;

        default:
            alert("Opção inválida!");
    }
}



// --------------------------------------------------
//  SALGADOS
// --------------------------------------------------
function escolherSalgado() {
    let item = Number(prompt(`Qual salgado você deseja?
[1] - Coxinha - R$ 3,90
[2] - Pastel  - R$ 8,00
[3] - Kibe    - R$ 3,00
[4] - Empada  - R$ 8,00
`));

    let preco = 0;
    let nome = "";

    switch (item) {
        case 1: nome = "Coxinha"; preco = 3.90; break;
        case 2: nome = "Pastel"; preco = 8.00; break;
        case 3: nome = "Kibe"; preco = 3.00; break;
        case 4: nome = "Empada"; preco = 8.00; break;
        default:
            alert("Opção inválida de salgado!");
            return;
    }

    let qtd = Number(prompt(`Quantas unidades de ${nome} você deseja?`));
    let total = qtd * preco;

    alert(`Você pediu ${qtd} ${nome}(s)\nTotal: R$ ${total.toFixed(2)}`);
}



// --------------------------------------------------
// BEBIDAS
// --------------------------------------------------
function escolherBebida() {
    let item = Number(prompt(`Qual bebida você deseja?
[1] - Refrigerante - R$ 6,00
[2] - Suco         - R$ 5,00
[3] - Água         - R$ 3,00
[4] - Cerveja      - R$ 8,00
`));

    let preco = 0;
    let nome = "";

    switch (item) {
        case 1: nome = "Refrigerante"; preco = 6.00; break;
        case 2: nome = "Suco"; preco = 5.00; break;
        case 3: nome = "Água"; preco = 3.00; break;
        case 4: nome = "Cerveja"; preco = 8.00; break;
        default:
            alert("Opção inválida de bebida!");
            return;
    }

    let qtd = Number(prompt(`Quantas unidades de ${nome} você deseja?`));
    let total = qtd * preco;

    alert(`Você pediu ${qtd} ${nome}(s)\nTotal: R$ ${total.toFixed(2)}`);
}



// --------------------------------------------------
// LANCHES
// --------------------------------------------------
function escolherLanche() {
    let item = Number(prompt(`Qual lanche você deseja?
[1] - Hambúrguer      - R$ 12,00
[2] - Cachorro-quente - R$ 10,00
[3] - Pizza           - R$ 7,00
[4] - Sanduíche       - R$ 9,00
`));

    let preco = 0;
    let nome = "";

    switch (item) {
        case 1: nome = "Hambúrguer"; preco = 12.00; break;
        case 2: nome = "Cachorro-quente"; preco = 10.00; break;
        case 3: nome = "Pizza"; preco = 7.00; break;
        case 4: nome = "Sanduíche"; preco = 9.00; break;
        default:
            alert("Opção inválida de lanche!");
            return;
    }

    let qtd = Number(prompt(`Quantos ${nome}(s) você deseja?`));
    let total = qtd * preco;

    alert(`Você pediu ${qtd} ${nome}(s)\nTotal: R$ ${total.toFixed(2)}`);
}



// --------------------------------------------------
// SOBREMESAS
// --------------------------------------------------
function escolherSobremesa() {
    let item = Number(prompt(`Qual sobremesa você deseja?
[1] - Sorvete - R$ 5,00
[2] - Pudim   - R$ 6,00
[3] - Bolo    - R$ 4,00
[4] - Doce    - R$ 2,50
`));

    let preco = 0;
    let nome = "";

    switch (item) {
        case 1: nome = "Sorvete"; preco = 5.00; break;
        case 2: nome = "Pudim"; preco = 6.00; break;
        case 3: nome = "Bolo"; preco = 4.00; break;
        case 4: nome = "Doce"; preco = 2.50; break;
        default:
            alert("Opção inválida de sobremesa!");
            return;
    }

    let qtd = Number(prompt(`Quantos ${nome}(s) você deseja?`));
    let total = qtd * preco;

    alert(`Você pediu ${qtd} ${nome}(s)\nTotal: R$ ${total.toFixed(2)}`);
}



// --------------------------------------------------
// INICIAR O MENU
// --------------------------------------------------
menu();
