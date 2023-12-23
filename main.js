const game = function (player, com) {
  const gameBoard = { player, com };

  return { gameBoard };
};

const gameRule = function () {
  const { gameBoard } = game([1, 2, 3], [2, 5, 6]);

  const halo = () => console.log(gameBoard);

  return { gameBoard, halo };
};
