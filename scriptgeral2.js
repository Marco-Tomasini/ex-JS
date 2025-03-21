//ex11
let pn = prompt("Digite um nº");


function verificarSinal(pn) {
  if (pn < 0) {
    console.log("O nº é negativo")
  }
  else if (pn > 0) {
    console.log("O nº é positivo")
  }
  else {
    console.log("O nº é 0, logo, neutro")
  }
}

verificarSinal(pn)



//ex12
function converterTemperatura() {
  let tempC = prompt("Digite a temperatura em °C");
  let tempF = (tempC * 1.8) + 32;
  console.log("temperatura em °f = " + tempF);
}

converterTemperatura()



//ex13
let i = 1;
let som = 0;

while (i <= 100) {
som = i + som;
i++;
}

console.log(som);



//ex14
const troca = "Azul é mto bom, Azul é a melhor cor do mundo";


function substituirPalavra() {
  console.log(troca.replace(/Azul/g, "Vermelho"));
}

substituirPalavra();



//ex15
let str = prompt("Digite uma palavra");


function verificarTamanho (str) {

  if(str.length > 10) {
    console.log("Tem mais de 10 caracteres aí");
  }
  else{
    console.log("Tem menos de 10 caracteres aí");
  }
}

verificarTamanho (str);



//ex16
const fruta = ["maça", "banana", "fruta do dragão", "abacate", "morango"];

console.log(fruta[2]);



//ex17
let nome = prompt("Digite seu nome");



function saudacao (nome, saudacao = "bem vindo(a)") {
  console.log(saudacao, nome);
}

saudacao(nome);



//ex18
let nos = prompt("Digite sua nota final");


function verificarAprovacao (nos) {
  if(nos >= 6){
    console.log("aprovado(a)");
  }
  else{
    console.log("reprovado(a)");
  }
}

verificarAprovacao (nos);



//ex19
let par = [];
let cont = 0;


for (let num = 0; num <= 30; num++) {
if(num % 2 == 0) {
  par[cont] = num;
  cont++;
}
}

console.log("n°s pares: " + par);



//ex20
function contarVogais() {
let pp = prompt("Digite uma palavra");
ps = pp.split('');
let numVogal = 0;
for (let cvog = 0; cvog <= pp.length; cvog++) {
    if ((ps[cvog] == 'a') || (ps[cvog] == 'e') || (ps[cvog] == 'i') || (ps[cvog] == 'o') || (ps[cvog] == 'u')) {
      numVogal++;
    }
}
console.log("O número de vogais da palavra é: " + numVogal);
}

contarVogais();




//ex21
let array = [5, 3, 9];

function somarArray(){
  console.log(array.reduce((partialSum, a) => partialSum + a, 0));
}

somarArray(array);




//ex22
let numero = prompt("Qual o número?");

function dobrarNumero(){
  console.log(numero * 2);
}

dobrarNumero(numero);




//ex23
let p = 1;
let parw = [];
let contw = 0;

function pares(p){
while (p <= 20){
  if (p % 2 == 0){
    parw[contw] = p;
    contw++
  }
  p++
}

console.log("n°s pares: " + parw);
}
  
pares(p);




//ex24
let minus = prompt("Qual a palavra em letras minúsculas?");

function capitalizar(){
  console.log(String(minus[0]).toUpperCase() + String(minus).slice(1));
}

capitalizar(minus);




//ex25
let ano =prompt("Qual o ano?");

function anoBissexto() {
  if (ano % 4 == 0 && ano % 100 != 0){
      console.log(ano, 'é ano bissexto');
  }
  else{
      console.log(ano, 'não é ano bissexto');

  }
}

anoBissexto(ano);