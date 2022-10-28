function integerAndFloat(num1, num2, num3) {
    const sum = num1 + num2 + num3;
    let type = "";
    if (sum === Math.trunc(sum)) {
      type = "Integer";
    } else {
      type = "Float";
    }
    console.log(`${sum} - ${type}`);
  }
  integerAndFloat(9, 100, 1.1);