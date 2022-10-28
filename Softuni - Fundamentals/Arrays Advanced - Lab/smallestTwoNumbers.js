function smallestTwoNumbers(arr) {
    let elements = arr.sort((a, b) => a - b).slice(0, 2);
    console.log(elements.join(" "));
  }
  smallestTwoNumbers([3, 0, 10, 4, 7, 3]);