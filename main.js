const gameRule = function (player, com) {
  const set = [player, com];
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
    console.log(combo);
    if (combo.some((e) => e == playercomb)) {
      console.log("Youwwwinn");
    }
    console.log(combo[0]);
    console.log(playercomb);
  };

  return { rule };
};

const test = gameRule([0, 1, 2], [4, 5, 7]);
test.rule();
