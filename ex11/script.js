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