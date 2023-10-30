var numeroSecreto = parseInt(Math.random() * 11);
var elementoResultado = document.getElementById("resultado");
var numeroTentativa = 0;
var elementoTentativa = document.getElementById("tentativa");
elementoTentativa.innerHTML = "Tentativa " + numeroTentativa;

function tentativa() {
  numeroTentativa++;
  elementoTentativa.innerHTML = "Tentativa " + numeroTentativa;
}
function Chutar() {
  var chute = parseInt(document.getElementById("valor").value);

  if (chute == numeroSecreto) {
    tentativa(numeroTentativa);
    elementoResultado.innerHTML =
      "Você Acertou na " +
      numeroTentativa +
      "° tentativa, o número secreto era " +
      numeroSecreto;
    const music = new Audio(
      "https://www.myinstants.com/media/sounds/acertou-mizeravijk.mp3"
    );
    music.play();
    reiniciar.style.visibility = "visible";
    valor.style.background = "green";
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = "Você deve digitar o número de 0 até 10";
  } else if (
    chute == numeroSecreto + 1 ||
    chute == numeroSecreto - 1 ||
    chute == numeroSecreto + 2 ||
    chute == numeroSecreto - 2 ||
    chute == numeroSecreto + 3 ||
    chute == numeroSecreto - 3
  ) {
    tentativa(numeroTentativa);
    elementoResultado.innerHTML = "Chegou perto! Tente outra vez";
    const music = new Audio(
      "https://www.myinstants.com/media/sounds/faustao-errou.mp3"
    );
    music.play();
    valor.style.background = "#fef95b";
  } else {
    tentativa(numeroTentativa);
    elementoResultado.innerHTML = "Passou Longe, Tente outra vez";
    const music = new Audio(
      "https://www.myinstants.com/media/sounds/faustao-errou.mp3"
    );
    music.play();
    valor.style.background = "red";
  }
}
function Reiniciar() {
  numeroSecreto = parseInt(Math.random() * 11);
  reiniciar.style.visibility = "hidden";
  numeroTentativa = 0;
  elementoResultado.innerHTML = null;
}
