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
