//ex1
let i = prompt("Digite um Nº");

function par_impar() {
    if (i % 2 == 0) {
        console.log("O nº é par");
    } else {
        console.log("O nº é impar");
    }
}

par_impar();



//ex2
let n1 = prompt("Digite um Nº");
let n2 = prompt("Digite outro Nº");

function calcular() {
    console.log (parseInt(n1) + parseInt(n2))
    console.log (n1 - n2)
    console.log (n1 * n2)
    console.log (n1 / n2)

}

calcular();



//ex3
let j1 = 10;

while (j1 > 0) {
    console.log(i);
    j1--;
}



//ex4
let text = prompt("Digite uma palavra");

function invertertexto() {
   console.log(text.split('').reverse().join(''));
}

invertertexto();



//ex5
let text2 = prompt("Digite uma palavra");

function contarCaracteres(str) {
    return str.length;
  }
  
  console.log(text2 + " - " + contarCaracteres(text2) + " caracteres");



//ex6
  let carro = {
    marca: prompt("Digite a marca do carro"),
    modelo: prompt("Digite o modelo do carro"),
    ano: prompt("Digite o ano do carro"),
    modelcar: function() {
        console.log("O modelo do carro é" + this.modelo);
    }
}

carro.modelcar();



//ex7
function mensagemPersonalizada() {
    let nomeP = prompt("Digite seu nome");
    let mensagem = "olá ";
    console.log(mensagem + nomeP)
}

mensagemPersonalizada();



//ex8
function mediaA(){
    let no1 = prompt("Digite uma nota");
    let no2 = prompt("Digite outra nota");
    let no3 = prompt("Digite outra nota");

    let media = (parseInt(no1) + parseInt(no2) + parseInt(no3)) / 3;
    console.log("A média aritmética dessas 3 notas é: " + media.toFixed(2));
}

mediaA();



//ex9
let m3 = [];
let n3 = [];
let j = 0;
let t = 0;

for (let f = 1; f <= 20; f++) {
    if(f % 3 == 0) {

        m3[j] = f;
        j++;
    } 

    else{
        n3[t] = f;
        t++;
    }

}

function tabelas () {
    console.log("nºs múltiplos de 3: " + m3);
    console.log("nºs não múltiplos de 3: " + n3);
}

tabelas ();




//ex10
function palinCheck() {
    let palin = prompt("Digite uma palavra");
    let comp = palin;
    let inverted = (comp.split('').reverse().join(''));

    if (palin == inverted) {
        console.log("a palavra " + palin + " é uma palavra Palíndroma ");
    }
    else {
        console.log("a palavra " + palin + " NÃO é uma palavra Palíndroma ");
    }
}

palinCheck();