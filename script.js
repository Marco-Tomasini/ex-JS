let i = prompt("Digite um Nº");

function par_impar() {
    if (i % 2 == 0) {
        console.log("O nº é par");
    } else {
        console.log("O nº é impar");
    }
}

par_impar();




let n1 = prompt("Digite um Nº");
let n2 = prompt("Digite outro Nº");

function calcular() {
    console.log (parseInt(n1) + parseInt(n2))
    console.log (n1 - n2)
    console.log (n1 * n2)
    console.log (n1 / n2)

}

calcular();




let j = 10;

while (j > 0) {
    console.log(i);
    j--;
}




let text = prompt("Digite uma palavra");

function invertertexto() {
   console.log(text.split('').reverse().join(''));
}

invertertexto();




let text2 = prompt("Digite uma palavra");


function contarCaracteres(str) {
    return str.length;
  }
  
  console.log(text2 + " - " + contarCaracteres(text2) + " caracteres");




  let carro = {
    marca: prompt("Digite a marca do carro"),
    modelo: prompt("Digite o modelo do carro"),
    ano: prompt("Digite o ano do carro"),
    modelcar: function() {
        console.log("O modelo do carro é" + this.modelo);
    }
}

carro.modelcar()




function mensagemPersonalizada() {
    let nomeP = prompt("Digite seu nome");
    let mensagem = "olá ";
    console.log(mensagem + nomeP)
}

mensagemPersonalizada()




let no1 = prompt("Digite uma nota");
let no2 = prompt("Digite outra nota");
let no3 = prompt("Digite outra nota");

function mediaA(){
    let media = (parseInt(no1) + parseInt(no2) + parseInt(no3)) / 3;
    console.log("A média aritmética dessas 3 notas é: " + media.toFixed(2));
}

mediaA()




