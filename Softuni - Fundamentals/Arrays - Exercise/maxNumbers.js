maxNumber([41, 41, 34, 20]);
function maxNumber(arr) {
  let resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    let isBigger = true;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        isBigger = false;
      }
    }
    if (isBigger) {
      resultArray.push(arr[i]);
    }
  }
  console.log(resultArray.join(" "));
}