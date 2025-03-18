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




  