function contarVogais() {
  let pp = prompt("Digite uma palavra");
  ps = pp.split('');
  let numVogal = 0;
  for (let cvog = 0; cvog <= pp.length; cvog++) {
      if ((ps[cvog] == 'a') || (ps[cvog] == 'e') || (ps[cvog] == 'i') || (ps[cvog] == 'o') || (ps[cvog] == 'u')) {
          numVogal++;
      }
  }
  console.log("O número de vogais da palavra é: " + numVogal);
}

contarVogais();