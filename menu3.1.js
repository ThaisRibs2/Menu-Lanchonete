function menu() {
    let opcao = Number(prompt(`Escolha uma opção do menu:
[1] - Salgado
[2] - Bebidas
[3] - Lanches
[4] - Sobremesas
[5] - Sair
`));

    switch (opcao) {
        case 1:
            Salgado();
            break;

        case 2:
            Bebida();
            break;

        case 3:
            Lanche();
            break;

        case 4:
            Sobremesa();
            break;

        case 5:
            alert("Você saiu do menu.");
            return;

        default:
            alert("Opção inválida!");
            break;
    }

    // Após escolher e finalizar, volta ao menu
    menu();
}



// ---------------------------------------------
// SALGADOS
// ---------------------------------------------
function Salgado() {
    let salgado = Number(prompt(`Qual salgado você deseja ?
[1] - Coxinha
[2] - Pastel
[3] - Kibe
[4] - Empada
`));

    switch (salgado) {
        case 1:
            let qtdCoxinha = Number(prompt("Quantas coxinhas você quer?"));
            alert(`Você pediu ${qtdCoxinha} Coxinha(s).`);
            break;

        case 2:
            let qtdPastel = Number(prompt("Quantos pastéis você quer?"));
            alert(`Você pediu ${qtdPastel} Pastel(is).`);
            break;

        case 3:
            let qtdKibe = Number(prompt("Quantos kibes você quer?"));
            alert(`Você pediu ${qtdKibe} Kibe(s).`);
            break;

        case 4:
            let qtdEmpada = Number(prompt("Quantas empadas você quer?"));
            alert(`Você pediu ${qtdEmpada} Empada(s).`);
            break;

        default:
            alert("Opção inválida de salgado");
            break;
    }
}



// ---------------------------------------------
// BEBIDAS
// ---------------------------------------------
function Bebida() {
    let bebida = Number(prompt(`Qual bebida você deseja ?
[1] - Refrigerante
[2] - Suco
[3] - Água
[4] - Cerveja
`));

    switch (bebida) {
        case 1:
            let qtdRefri = Number(prompt("Quantos refrigerantes você quer?"));
            alert(`Você pediu ${qtdRefri} Refrigerante(s).`);
            break;

        case 2:
            let qtdSuco = Number(prompt("Quantos sucos você quer?"));
            alert(`Você pediu ${qtdSuco} Suco(s).`);
            break;

        case 3:
            let qtdAgua = Number(prompt("Quantas águas você quer?"));
            alert(`Você pediu ${qtdAgua} Água(s).`);
            break;

        case 4:
            let qtdCerveja = Number(prompt("Quantas cervejas você quer?"));
            alert(`Você pediu ${qtdCerveja} Cerveja(s).`);
            break;

        default:
            alert("Opção inválida de bebida");
            break;
    }
}



// ---------------------------------------------
// LANCHES
// ---------------------------------------------
function Lanche() {
    let lanche = Number(prompt(`Qual lanche você deseja ?
[1] - Hambúrguer
[2] - Cachorro-quente
[3] - Pizza
[4] - Sanduíche
`));

    switch (lanche) {
        case 1:
            let qtdHamb = Number(prompt("Quantos hambúrgueres você quer?"));
            alert(`Você pediu ${qtdHamb} Hambúrguer(es).`);
            break;

        case 2:
            let qtdDog = Number(prompt("Quantos cachorros-quentes você quer?"));
            alert(`Você pediu ${qtdDog} Cachorro(s)-quente.`);
            break;

        case 3:
            let qtdPizza = Number(prompt("Quantas pizzas você quer?"));
            alert(`Você pediu ${qtdPizza} Pizza(s).`);
            break;

        case 4:
            let qtdSanduiche = Number(prompt("Quantos sanduíches você quer?"));
            alert(`Você pediu ${qtdSanduiche} Sanduíche(s).`);
            break;

        default:
            alert("Opção inválida de lanche");
            break;
    }
}



// ---------------------------------------------
// SOBREMESAS
// ---------------------------------------------
function Sobremesa() {
    let sobremesa = Number(prompt(`Qual sobremesa você deseja ?
[1] - Sorvete
[2] - Pudim
[3] - Bolo
[4] - Doce
`));

    switch (sobremesa) {
        case 1:
            let qtdSorvete = Number(prompt("Quantos sorvetes você quer?"));
            alert(`Você pediu ${qtdSorvete} Sorvete(s).`);
            break;

        case 2:
            let qtdPudim = Number(prompt("Quantos pudins você quer?"));
            alert(`Você pediu ${qtdPudim} Pudim(ns).`);
            break;

        case 3:
            let qtdBolo = Number(prompt("Quantos bolos você quer?"));
            alert(`Você pediu ${qtdBolo} Bolo(s).`);
            break;

        case 4:
            let qtdDoce = Number(prompt("Quantos doces você quer?"));
            alert(`Você pediu ${qtdDoce} Doce(s).`);
            break;

        default:
            alert("Opção inválida de sobremesa");
            break;
    }
}


// Inicia o programa
menu();
