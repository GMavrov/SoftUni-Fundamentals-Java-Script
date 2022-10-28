function searchForANumber(numbersForManipulation, arrOfNums) {
    let [numsToTake, numsToDelete, numToSearchFor] = arrOfNums;
    let manipulatedArr = numbersForManipulation.slice(0, numsToTake);
    manipulatedArr.splice(0, numsToDelete);
    let occurances = 0;
    for (const num of manipulatedArr) {
      if (num === numToSearchFor) {
        occurances++;
      }
    }
    console.log(`Number ${numToSearchFor} occurs ${occurances} times.`);
  }
  searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]);