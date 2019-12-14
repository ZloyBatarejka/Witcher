const big = document.querySelector("#big");
const selectors = document.querySelectorAll(".selector");
const picked = document.querySelector(".picked");
document.body.addEventListener("click", () => {
  alert("Use arrow keys");
});
const fighters = [
  ["ciri", "geralt", "triss", "yen"],
  ["vesemir", "vilg", "roche", "anna"],
  ["letho", "emhyr", "dettlaff", "ava"]
];
const pick = {
  col: 0,
  row: 0
};
const images = {
  ciri: "./img/big/ciri.jpg",
  geralt: "./img/big/geralt.png",
  triss: "./img/big/triss.jpg",
  yen: "./img/big/yen.png",
  vesemir: "./img/big/vesemir.png",
  vilg: "./img/big/vilg.jpg",
  roche: "./img/big/roche.png",
  anna: "./img/big/anna.png",
  letho: "./img/big/letho.png",
  emhyr: "./img/big/emhyr.jpg",
  dettlaff: "./img/big/dettlaff.jpg",
  ava: "./img/big/anna.png"
};
function activate(id) {
  selectors.forEach(selector => {
    selector.classList.remove("active");
    document.querySelector(`#${id}`).classList.add("active");
  });
}
function chose(id) {
  picked.src = images[id];
  activate(id);
}
document.addEventListener("keydown", event => {
  switch (event.keyCode) {
    case 37:
      handleLeft();
      break;
    case 38:
      handleUp();
      break;
    case 39:
      handleRight();
      break;
    case 40:
      handleDown();
      break;
  }
});

function handleRight() {
  pick.col >= fighters[0].length - 1 ? (pick.col = 0) : pick.col++;
  chose(fighters[pick.row][pick.col]);
}

function handleLeft() {
  pick.col <= 0 ? (pick.col = fighters[0].length - 1) : pick.col--;
  chose(fighters[pick.row][pick.col]);
}

function handleUp() {
  pick.row == 0 ? (pick.row = fighters.length - 1) : pick.row--;
  chose(fighters[pick.row][pick.col]);
}

function handleDown() {
  pick.row == fighters.length - 1 ? (pick.row = 0) : pick.row++;
  chose(fighters[pick.row][pick.col]);
}
