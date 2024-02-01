const visualObject = function () {
  const playerScore = document.querySelector("#playerScore");
  const ComScore = document.querySelector("#comScore");
  const mainBoard = document.querySelectorAll(".main div");
  return { playerScore, ComScore, mainBoard };
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
  const possib = ["0", "1", "2", "3", "4", "5", "6", "7", "8"];
  const reset = () => {
    player = [];
    com = [];
    mainBoard.forEach((e) => (e.style.backgroundColor = "antiquewhite"));
  };
  const rule = () => {
    let winner = "";
    const combo = combination.map((e) => e.map((el) => el.toString()));
    console.log(combo);
    combo.forEach((e) => {
      if (e.every((el) => player.some((elem) => el == elem))) {
        winner = "player";
      } else if (e.every((el) => com.some((elem) => el == elem))) {
        winner = "com";
      }
    });
    if (winner == "player") {
      alert("PLAYER WIN");
      reset();
    } else if (winner == "com") {
      alert("COMPUTER WIN");
      reset();
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
    rule();

    const all = player.concat(com);
    if (possib.every((e) => all.some((f) => e == f))) {
      alert("DRAW");
      reset();
    } else {
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
      com.push(comEntry.toString());
      rule();
    }
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
