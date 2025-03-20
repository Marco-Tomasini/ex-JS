let carro = {
    marca: prompt("Digite a marca do carro"),
    modelo: prompt("Digite o modelo do carro"),
    ano: prompt("Digite o ano do carro"),
    modelcar: function() {
        console.log("O modelo do carro é" + this.modelo);
    }
}

carro.modelcar()