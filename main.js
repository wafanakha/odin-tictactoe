const gameRule = function (player, com) {
  const set = [player, com];
  const rule = () => {};

  return { rule };
};

const test = gameRule([1, 2, 3], [4, 5, 7]);
test.rule();
