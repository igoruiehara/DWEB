
let contador = 0;

let somaIdade = 0;
let maisNovo = 0;
let maisVelho = 0;

let numHomens = 0;
let numMulheres = 0;

let nota = [0, 0, 0, 0, 0];

function responder() {

    let nome = document.getElementById("nome").value;
    let idade = parseInt(document.getElementById("idade").value);
    let sexo = document.getElementById("sexo").value;
    let opiniao = parseInt(document.getElementById("opiniao").value);

    if (contador == 0) {
        maisNovo = idade;
        maisVelho = idade;
    }

    somaIdade += idade;

    if (idade < maisNovo)
        maisNovo = idade;

    if (idade > maisVelho)
        maisVelho = idade;

    if (sexo == "F")
        numMulheres++;

    if (sexo == "M")
        numHomens++;

    nota[opiniao]++;
    contador++;

    document.getElementById("contador").textContent =
        "Participantes: " + contador + "/10";

    if (contador == 10) {

        let mediaIdade = somaIdade / contador;

        document.getElementById("resultado").innerHTML =
        "Pesquisa encerrada!" +
        "Média de idade: " + mediaIdade.toFixed(2) + "<br>" +
        "Pessoa mais velha: " + maisVelho + " anos<br>" +
        "Pessoa mais nova: " + maisNovo + " anos<br>" +
        "Quantidade de péssimos: " + nota[1] + "<br>" +
        "Quantidade de ótimos e bons: " + (nota[4] + nota[3]) + "<br>" +
        "Quantidade de homens: " + numHomens + "<br>" +
        "Quantidade de mulheres: " + numMulheres;

    }

}
