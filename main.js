const visualObject = function () {
  const score = document.querySelector(".score");
  const mainBoard = document.querySelectorAll(".main div");
  return { score, mainBoard };
};

const gameRule = function () {
  const { score, mainBoard } = visualObject();
  const player = [];
  const com = [];
  const combination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const rule = () => {
    const playercomb = player.slice(-3).join(",");
    const comcomb = com.slice(-3).join(",");
    const combo = combination.map((e) => e.join(","));
    const reversedcombo = combination.map((e) => e.reverse().join(","));
    if (
      combo.some((e) => e == playercomb) ||
      reversedcombo.some((e) => e == playercomb)
    ) {
      alert("PLAYER WIN");
    } else if (combo.some((e) => e == comcomb)) {
      alert("COMPUTER WIN");
    }
  };

  const logic = (e) => {
    console.log(e);
    const playerEntry = e.getAttribute("id");
    player.push(playerEntry);
    const comEntry = Math.floor(Math.random() * 8);
    const comSelected = document.getElementById(`${comEntry}`);
    comSelected.style.backgroundColor = "black";
    com.push(comEntry);
    rule();
  };

  const start = () => {
    mainBoard.forEach((e) =>
      e.addEventListener("click", (e) => logic(e.currentTarget))
    );
    if (player.length >= 3) {
    }
  };
  return { start };
};

let test = gameRule();
test.start();
