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
  const comcomb = com.join(",");
  const combo = combination.map((e) => e.join(","));
  const rule = () => {
    if (combo.some((e) => e == playercomb) || combo.some((e) => e == comcomb)) {
      return false;
    }
  };

  return { rule };
};

const gameSet = function () {
  const { rule } = gameRule();
  const player = [];
  const com = [];
  const start = () => {
    while (rule()) {
      player.push(prompt("player"));
      com.push(Math.floor(Math.random() * 9));
      console.log(player, com);
    }
  };
  start();
  return { player, com };
};

const test = gameRule();
test.rule();
