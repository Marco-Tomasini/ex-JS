let no1 = prompt("Digite uma nota");
let no2 = prompt("Digite outra nota");
let no3 = prompt("Digite outra nota");

function mediaA(){
    let media = (parseInt(no1) + parseInt(no2) + parseInt(no3)) / 3;
    console.log("A média aritmética dessas 3 notas é: " + media.toFixed(2));
}

mediaA()