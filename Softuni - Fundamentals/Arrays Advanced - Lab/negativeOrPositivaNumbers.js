function negativeOrPositiveNumbers(arr) {
    let resultArray = [];
    for (const number of arr) {
      let num = Number(number);
      if (num < 0) {
        resultArray.unshift(num);
      } else {
        resultArray.push(num);
      }
    }
    console.log(resultArray.join("\n"));
  }
  negativeOrPositiveNumbers(["3", "-2", "0", "-1"]);