function distinctArray(arr) {
    let uniqueNums = [];
    for (let i = 0; i < arr.length; i++) {
      if (!uniqueNums.includes(arr[i])) {
        uniqueNums.push(arr[i]);
      }
    }
    console.log(uniqueNums.join(" "));
  }
  distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2]);