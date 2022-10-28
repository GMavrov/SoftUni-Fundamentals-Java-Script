function solve(input) {
  let resultArray = [];
  let inputArraySum = 0;
  let finalArraySum = 0;
  let inputLength = input.length;

  for (let i = 0; i <= inputLength - 1; i++) {
    let currentNumber = input[i];

    let odd = currentNumber - i;
    let even = currentNumber + i;

    if (currentNumber % 2 == 0) {
      resultArray.push(even);
    } else {
      resultArray.push(odd);
    }

    inputArraySum += currentNumber;
    finalArraySum += resultArray[i];
  }
  console.log(resultArray);
  console.log(inputArraySum);
  console.log(finalArraySum);
}
solve([5, 15, 23, 56, 35]);
