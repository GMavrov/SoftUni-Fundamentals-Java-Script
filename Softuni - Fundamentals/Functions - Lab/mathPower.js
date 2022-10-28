function mathPower(value, power) {
    let total = value;
    for (let i = 1; i < power; i++) {
      total *= value;
    }
    console.log(total);
  }
  mathPower(2, 8);