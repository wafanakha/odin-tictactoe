const gameRule = function (player, com) {
  const set = [player, com];
  const rule = () => {
    set.forEach((e) => {
      let ex = e[0];
      console.log([ex, ex++, ex++]);
      switch (ex) {
        case e == [ex, ex++, ex++]:
          console.log("yuuuhuuu");
          break;

        default:
          console.log("gagal");
          break;
      }
    });
  };

  return { rule };
};

const test = gameRule([1, 2, 3], [4, 5, 7]);
test.rule();
