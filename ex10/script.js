function palinCheck() {
    let palin = prompt("Digite uma palavra");
    let comp = palin;
    let inverted = (comp.split('').reverse().join(''));

    if (palin == inverted) {
        console.log("a palavra " + palin + " é uma palavra Palíndroma ");
    }
    else {
        console.log("a palavra " + palin + " NÃO é uma palavra Palíndroma ");
    }
}

palinCheck();