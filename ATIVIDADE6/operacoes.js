alert("Olá, digite dois valores por favor;)");
let n1 =  parseFloat(prompt("numero 1"));
let n2 =  parseFloat(prompt("numero 2"));
let continuar = confirm("Confimar?");


let soma = (n1 + n2);
let subtracao = ( n1 - n2);
let produto = (n1 * n2);
let div = (n2 / n1);
let mod = ( n1 % n2);

alert(
"Soma: " + soma.toFixed(2) +
"\nSubtração: " + subtracao.toFixed(2) +
"\nProduto: " + produto.toFixed(2) +
"\nDivisão: " + div.toFixed(2) +
"\nResto: " + mod.toFixed(2)
);