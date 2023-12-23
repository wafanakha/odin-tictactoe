const gameRule = function (player, com) {
  const halo = () => {
    console.log(player);
  };

  return { player, com, halo };
};

const test = gameRule();
test.halo();
