function SumOfOddNumbers(num) {
    let counter = 1;
    let total = 0;
    for (let i = 0; i < num; i++) {
      console.log(counter);
      total += counter;
      counter += 2;
    }
    console.log(`Sum: ${total}`);
  }
  SumOfOddNumbers(5);