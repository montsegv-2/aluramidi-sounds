//For each button
const playSonido = (id) => {
  document.querySelector(id).play();
};
// document.querySelector(".tecla_pom").onclick = playSonidoPom;

const listaDeTeclas = document.querySelectorAll(".tecla");

// console.log(listaDeTeclas);
let cont = 0;

for (let cont = 0; cont < listaDeTeclas.length; cont++) {
  const tecla = listaDeTeclas[cont];
  const intruments = tecla.classList[1];

  const idAudio = `#sonido_${intruments}`;

  tecla.onclick = () => {
    playSonido(idAudio);
  };

  cont++;
  console.log("vuelta del contador: ", cont);
}
