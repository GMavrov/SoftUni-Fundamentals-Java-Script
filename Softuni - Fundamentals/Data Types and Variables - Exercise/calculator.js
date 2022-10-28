function solve(num1, operator, num2) {
  let sum = 0;

  switch (operator) {
    case "+":
      sum = num1 + num2;
      console.log(sum.toFixed(2));
      break;

    case "-":
      sum = num1 - num2;
      console.log(sum.toFixed(2));
      break;

    case "*":
      sum = num1 * num2;
      console.log(sum.toFixed(2));
      break;

    case "/":
      sum = num1 / num2;
      console.log(sum.toFixed(2));
      break;
  }
}
solve(5, "+", 10);
