//For each button
const playSonido = (id) => {
  document.querySelector(id).play();
};

const listaDeTeclas = document.querySelectorAll(".tecla");

let cont = 0;

for (let cont = 0; cont < listaDeTeclas.length; cont++) {
  const tecla = listaDeTeclas[cont];
  const intruments = tecla.classList[1];

  const idAudio = `#sonido_${intruments}`;

  tecla.onclick = () => {
    playSonido(idAudio);
  };

  tecla.onkeydown = (event) => {
    if (event.code === "Space" || event.code === "Enter") {
      tecla.classList.add("activa");
    }
  };

  tecla.onkeyup = () => {
    tecla.classList.remove("activa");
  };
}
