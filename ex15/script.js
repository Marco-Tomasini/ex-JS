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