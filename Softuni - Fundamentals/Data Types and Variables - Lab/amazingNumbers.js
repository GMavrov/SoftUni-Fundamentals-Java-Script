function amazingNumbers(number) {
    number = number.toString();
    let sum = 0;
    for (const key in number) {
      sum += Number(number[key]);
    }
    if (sum.toString().includes(9)) {
      console.log(`${number} Amazing? True`);
    } else {
      console.log(`${number} Amazing? False`);
    }
  }
  amazingNumbers(1233);