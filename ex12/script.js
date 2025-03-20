function converterTemperatura() {
    let tempC = prompt("Digite a temperatura em °C");
    let tempF = (tempC * 1.8) + 32;
    console.log("temperatura em °f = " + tempF);
  }

converterTemperatura()