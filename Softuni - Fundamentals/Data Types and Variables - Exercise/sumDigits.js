function solve(num) {
  let sum = 0;
  let convNumber = num.toString();
  let nubmerOfDigits = convNumber.length;

  for (let index = 0; index < nubmerOfDigits; index++) {
    let currentDigit = Number(convNumber[index]);
    sum += currentDigit;
  }
  console.log(sum);
}
solve("245678");
