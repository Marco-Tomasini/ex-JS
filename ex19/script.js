let par = [];
let i = 0;


for (let num = 0; num <= 30; num++) {
  if(num % 2 == 0) {
    par[i] = num;
    i++;
  }
}

console.log("n°s pares: ", par);