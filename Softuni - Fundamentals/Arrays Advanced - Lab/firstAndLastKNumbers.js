function firstAndLastKNumbers(arr) {
    let amountOfElements = arr.shift();
  
    let firstElements = arr.slice(0, amountOfElements);
    let lastElements = arr.slice(arr.length - amountOfElements);
    console.log(firstElements.join(" "));
    console.log(lastElements.join(" "));
  }
  firstAndLastKNumbers([3, 6, 7, 8, 9]);