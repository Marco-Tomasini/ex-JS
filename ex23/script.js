let p = 1;
let parw = [];
let contw = 0;

function pares(p){
while (p <= 20){
  if (p % 2 == 0){
    parw[contw] = p;
    contw++
  }
  p++
}

console.log("n°s pares: " + parw);
}
  
pares(p);