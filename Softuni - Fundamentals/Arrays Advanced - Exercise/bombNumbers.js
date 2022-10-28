function bombNumbers(sequenceOfNums, bombArr) {
    let [bombNum, bombPower] = bombArr;
  
    while (sequenceOfNums.includes(bombNum)) {
      let index = Math.max(sequenceOfNums.indexOf(bombNum) - bombPower, 0);
  
      sequenceOfNums.splice(index, bombPower + 1);
  
      sequenceOfNums.splice(index, bombPower);
    }
    let sum = 0;
    for (const num of sequenceOfNums) {
      sum += num;
    }
    console.log(sum);
  }
  bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);