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
    if (combo.some((e) => e == playercomb)) {
      alert("PLAYER WIN");
      return false;
    } else if (combo.some((e) => e == comcomb)) {
      alert("COMPUTER WIN");
      return false;
    }
    return true;
  };

  const logic = (e) => {
    console.log(e);
    const entry = e.getAttribute("id");
    player.push(entry);
    com.push(Math.floor(Math.random() * 8));
    console.log(player);
  };
  const start = () => {
    mainBoard.forEach((e) =>
      e.addEventListener("click", (e) => logic(e.currentTarget))
    );
  };
  return { start };
};

let test = gameRule();
test.start();
