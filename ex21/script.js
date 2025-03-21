let array = [5, 3, 9];

function somarArray(){
  console.log(array.reduce((partialSum, a) => partialSum + a, 0));
}

somarArray(array);