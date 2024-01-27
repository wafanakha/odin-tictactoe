const visualObject = function () {
  const score = document.querySelector(".score");
  const mainBoard = document.querySelectorAll(".main div");
  return { score, mainBoard };
};

const gameRule = function () {
  const { score, mainBoard } = visualObject();
  let player = [];
  let com = [];
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
      player = [];
      com = [];
      mainBoard.forEach((e) => (e.style.backgroundColor = "antiquewhite"));
    } else if (combo.some((e) => e == comcomb)) {
      alert("COMPUTER WIN");
      player = [];
      com = [];
      mainBoard.forEach((e) => (e.style.backgroundColor = "antiquewhite"));
    }
  };

  const logic = (e) => {
    const playerEntry = e.getAttribute("id");
    if (
      com.some((e) => playerEntry == e) ||
      player.some((e) => playerEntry == e)
    ) {
      alert("has been selected");
      return;
    }
    console.log(e);
    e.style.backgroundColor = "white";
    player.push(playerEntry);

    let comEntry = Math.floor(Math.random() * 8);
    while (
      player.some((e) => e == comEntry.toString()) ||
      com.some((e) => e == comEntry.toString())
    ) {
      comEntry = Math.floor(Math.random() * 8);
    }
    console.log(comEntry);
    const comSelected = document.getElementById(`${comEntry}`);
    comSelected.style.backgroundColor = "black";
    com.push(comEntry);
    rule();
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
