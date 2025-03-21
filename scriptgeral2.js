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
let text2 = prompt("Digite uma palavra");


function contarCaracteres(str) {
    return str.length;
  }
  
  console.log(text2 + " - " + contarCaracteres(text2) + " caracteres");



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

console.log("n°s pares: ", par);



//ex20
