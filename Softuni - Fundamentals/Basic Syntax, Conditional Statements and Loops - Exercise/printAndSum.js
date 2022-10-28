function solve(start, end) {
  let nums = "";
  let total = 0;

  for (let i = start; i <= end; i++) {
    total += i;
    nums += `${i} `;
    console.log();
  }
  console.log(nums);
  console.log("Sum: " + total);
}
solve(50, 60);
