const gameRule = function () {
  const { player, com } = gameSet();
  console.log(player, com);
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
  const playercomb = player.join(",");
  const combo = combination.map((e) => e.join(","));
  const rule = () => {
    if (combo.some((e) => e == playercomb)) {
      console.log("Youwwwinn");
    }
  };

  return { rule };
};

const gameSet = function () {
  const player = [];
  const com = [];
  const start = () => {
    player.push(prompt("player"));
    com.push(Math.floor(Math.random() * 9));
    com.push(Math.floor(Math.random() * 9));
    com.push(Math.floor(Math.random() * 9));
  };
  start();
  return { player, com, start };
};

const test = gameRule();
test.rule();
