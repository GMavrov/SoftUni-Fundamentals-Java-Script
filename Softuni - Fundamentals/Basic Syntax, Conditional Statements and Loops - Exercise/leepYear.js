function solve(year) {
  let isLeep = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

  if (isLeep) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
