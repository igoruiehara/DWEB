
alert("Olá, digite seu nome por gentileza ;)");
let nome = prompt("Digite seu nome");
let continuar = confirm("Confimar?");
alert("Digite suas 4 notas");

let n1 =  parseFloat(prompt("Nota 1"));
let n2 =  parseFloat(prompt("Nota 2"));
let n3 =  parseFloat(prompt("Nota 3"));
let n4 =  parseFloat(prompt("Nota 4"));

let media = ( n1 + n2 + n3 + n4) / 4;


alert(nome + ", sua média é: " + media.toFixed(2)); // imprimir nome + media ( 8.90)
