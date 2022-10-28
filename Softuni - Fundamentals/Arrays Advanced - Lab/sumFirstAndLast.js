function sumFirstAndLast(arr) {
    let firstEl = Number(arr.shift());
    let lastEl = Number(arr.pop());
    return firstEl + lastEl;
  }
  sumFirstAndLast(["20", "30", "40"]);