
let Num1, Num2, Num3, dataInformada, escolha;
let texto1, texto2;

//resto do código ta laembaixo professora ( chamada das funções)

function retornamaior() {

let Num1 = parseFloat(prompt("Digite o primeiro número"));
let Num2 = parseFloat(prompt("Digite o segundo número"));
let Num3 = parseFloat(prompt("Digite o terceiro número"));

    if (Num1 > Num2 && Num1 > Num3) {
        return Num1;
    }
    else if (Num2 > Num1 && Num2 > Num3) {
        return Num2;
    }
    else {
        return Num3;
    }

}




function retornacresce() 
{

const array = []; //utilizei array para facilitar a saida
array[0] = parseFloat(prompt("Digite o primeiro número:"));
array[1] = parseFloat(prompt("Digite o segundo número:"));
array[2] = parseFloat(prompt("Digite o terceiro número:"));

    let aux;

    for (let i = 0; i < 2; i++) 
        {

        if (array[i] > array[i+1]) 
            {
            aux = array[i];
            array[i] = array[i+1];
            array[i+1] = aux;
            }

        }

    for (let i = 0; i < 2; i++) 
        {

        if (array[i] > array[i+1]) 
            {
            aux = array[i];
            array[i] = array[i+1];
            array[i+1] = aux;
            }

    }
alert("Ordem crescente:");
    for (let i = 0; i < 3; i++) {
        alert(array[i]);
    }
    return array;

}



function palidromo() 
{

texto1 = prompt("Digite a string:");
texto1 = texto1.toLowerCase();
texto1 = texto1.replaceAll(" ", "");
let inverso = texto1.split("").reverse().join("");

    if (texto1 == inverso)
        return "É palíndromo";
            else
             return "Não é palíndromo";

}

function string() {

texto1 = prompt("Digite a primeira string:");
texto2 = prompt("Digite a segunda string:");

    if (texto1 == "" || texto2 == "" ||
        texto1 == null || texto2 == null ||
        texto1 == undefined || texto2 == undefined) {
        return "Erro";
    }

    if (texto1.includes(texto2))
        return "É um subconjunto";
     else
         return "Não é um subconjunto";

}



function data() {

let dia, mes, ano;

dia = parseInt(prompt("Digite o dia:"));
mes = parseInt(prompt("Digite o mês:"));
ano = parseInt(prompt("Digite o ano:"));

let dataConvertida = new Date(ano, mes - 1, dia);

    let dias = ["Domingo", "Segunda-feira", "Terça-feira",
                "Quarta-feira", "Quinta-feira", "Sexta-feira",
                "Sábado"];

    if (dataConvertida.getDate() != dia ||
        dataConvertida.getMonth() != mes - 1 ||
        dataConvertida.getFullYear() != ano) {

        return "Data inválida";

    }

return dias[dataConvertida.getDay()];

}
alert("ESCOLHA UM NUMERO PARA UMA FUNÇÃO \n <1> para retornar o maior valor \n <2> Para deixar em ordem decrescente \n <3> Para ver se é palidromo \n <4> para ver se é um subconjunto \n <5> para digitar uma data e ver o dia da semana");
escolha = parseFloat(prompt("Digite a função escolhida"));

    if (escolha === 1)
        alert("Maior número: " + retornamaior());
        else if(escolha === 2)
            retornacresce();
            else if(escolha === 3)
                alert(palidromo());
                else if(escolha === 4)
                    alert(string());
                    else ( escolha === 5)
                        alert(data());



