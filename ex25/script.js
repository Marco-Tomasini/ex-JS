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