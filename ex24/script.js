let minus = prompt("Qual a palavra em letras minúsculas?");

function capitalizar(){
  console.log(String(minus[0]).toUpperCase() + String(minus).slice(1));
}

capitalizar(minus);