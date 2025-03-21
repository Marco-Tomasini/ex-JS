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