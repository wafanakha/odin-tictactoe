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
  const combo = combination.join(",");
  const rule = () => {
    if (combination.some(() => player.join(","))) {
      console.log("Youwwwinn");
    }
  };

  return { rule };
};

const test = gameRule([1, 2, 3], [4, 5, 7]);
test.rule();
