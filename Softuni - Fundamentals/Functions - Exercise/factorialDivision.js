function factorialDivision(num1, num2) {
    let firstNumFactorial = 1;
    let secondNumFactorial = 1;
    for (let i = num1; i >= 1; i--) {
      firstNumFactorial *= i;
    }
    for (let i = num2; i >= 1; i--) {
      secondNumFactorial *= i;
    }
    console.log((firstNumFactorial / secondNumFactorial).toFixed(2));
  }
  factorialDivision(6, 2);