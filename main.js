//For each button
const playSonido = (id) => {
  document.querySelector(id).play();
};
// document.querySelector(".tecla_pom").onclick = playSonidoPom;

const listaDeTeclas = document.querySelectorAll(".tecla");

// console.log(listaDeTeclas);
let cont = 0;

while (cont < 9) {
  listaDeTeclas[cont].onclick = () => {
    playSonido();
  };
  cont++;
  console.log("vuelta del contador: ", cont);
}
