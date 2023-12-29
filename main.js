const gameRule = function () {
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
    const playercomb = player.join(",");
    const comcomb = com.join(",");
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
  const start = () => {
    player.push(prompt("player"));
    com.push(Math.floor(Math.random() * 8));
    alert(`Player: ${player.slice(-3)} com: ${com.slice(-3)}`);

    player.push(prompt("player"));
    com.push(Math.floor(Math.random() * 8));
    alert(`Player: ${player.slice(-3)} com: ${com.slice(-3)}`);

    do {
      player.push(prompt("player"));
      com.push(Math.floor(Math.random() * 8));
      alert(`Player: ${player.slice(-3)} com: ${com.slice(-3)}`);
    } while (rule());
  };
  return { start };
};

const test = gameRule();
test.start();
