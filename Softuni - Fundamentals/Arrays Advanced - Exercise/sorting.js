function sorting(arr) {
    let resultArray = [];
    arr.sort((a, b) => a - b);
    while (arr.length !== 0) {
      let biggestEl = arr.pop();
      let smallestEl = arr.shift();
      resultArray.push(biggestEl);
      resultArray.push(smallestEl);
    }
  
    console.log(resultArray.join(" "));
  }
  sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);