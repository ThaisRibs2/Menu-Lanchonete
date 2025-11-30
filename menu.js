let opcao = Number(prompt(`Escolha uma opção do menu:
[1] - Salgado
[2] - Bebidas
[3] - Lanches
[4] - Sobremesas
[5] - Sair
`));

switch (opcao) {

    // ---------------- SALGADOS ----------------
    case 1:
        let salgado = Number(prompt(`Qual salgado você deseja?
[1] - Coxinha
[2] - Pastel
[3] - Kibe
[4] - Empada
`));

        switch (salgado) {
            case 1:
                let cox = Number(prompt("Quantas coxinhas você deseja?"));
                alert(`Você escolheu ${cox} coxinha(s).`);
                break;

            case 2:
                let pas = Number(prompt("Quantos pastéis você deseja?"));
                alert(`Você escolheu ${pas} pastel(is).`);
                break;

            case 3:
                let kib = Number(prompt("Quantos kibes você deseja?"));
                alert(`Você escolheu ${kib} kibe(s).`);
                break;

            case 4:
                let emp = Number(prompt("Quantas empadas você deseja?"));
                alert(`Você escolheu ${emp} empada(s).`);
                break;

            default:
                alert("Opção inválida de salgado.");
        }
        break;


    // ---------------- BEBIDAS ----------------
    case 2:
        let bebida = Number(prompt(`Qual bebida você deseja?
[1] - Refrigerante
[2] - Suco
[3] - Água
[4] - Cerveja
`));

        switch (bebida) {
            case 1:
                let ref = Number(prompt("Quantos refrigerantes você deseja?"));
                alert(`Você escolheu ${ref} refrigerante(s).`);
                break;

            case 2:
                let suc = Number(prompt("Quantos sucos você deseja?"));
                alert(`Você escolheu ${suc} suco(s).`);
                break;

            case 3:
                let agu = Number(prompt("Quantas águas você deseja?"));
                alert(`Você escolheu ${agu} água(s).`);
                break;

            case 4:
                let cerv = Number(prompt("Quantas cervejas você deseja?"));
                alert(`Você escolheu ${cerv} cerveja(s).`);
                break;

            default:
                alert("Opção inválida de bebida.");
        }
        break;


    // ---------------- LANCHES ----------------
    case 3:
        let lanche = Number(prompt(`Qual lanche você deseja?
[1] - Hambúrguer
[2] - Cachorro-quente
[3] - Pizza
[4] - Sanduíche
`));

        switch (lanche) {
            case 1:
                let ham = Number(prompt("Quantos hambúrgueres você deseja?"));
                alert(`Você escolheu ${ham} hambúrguer(es).`);
                break;

            case 2:
                let dog = Number(prompt("Quantos cachorros-quentes você deseja?"));
                alert(`Você escolheu ${dog} cachorro(s)-quente.`);
                break;

            case 3:
                let piz = Number(prompt("Quantas pizzas você deseja?"));
                alert(`Você escolheu ${piz} pizza(s).`);
                break;

            case 4:
                let sand = Number(prompt("Quantos sanduíches você deseja?"));
                alert(`Você escolheu ${sand} sanduíche(s).`);
                break;

            default:
                alert("Opção inválida de lanche.");
        }
        break;


    // ---------------- SOBREMESAS ----------------
    case 4:
        let sobremesa = Number(prompt(`Qual sobremesa você deseja?
[1] - Sorvete
[2] - Pudim
[3] - Bolo
[4] - Doce
`));

        switch (sobremesa) {
            case 1:
                let sor = Number(prompt("Quantos sorvetes você deseja?"));
                alert(`Você escolheu ${sor} sorvete(s).`);
                break;

            case 2:
                let pud = Number(prompt("Quantos pudins você deseja?"));
                alert(`Você escolheu ${pud} pudim(ns).`);
                break;

            case 3:
                let bol = Number(prompt("Quantos bolos você deseja?"));
                alert(`Você escolheu ${bol} bolo(s).`);
                break;

            case 4:
                let doc = Number(prompt("Quantos doces você deseja?"));
                alert(`Você escolheu ${doc} doce(s).`);
                break;

            default:
                alert("Opção inválida de sobremesa.");
        }
        break;


    case 5:
        alert("Você saiu do menu.");
        break;

    default:
        alert("Opção inválida.");
        break;
}
