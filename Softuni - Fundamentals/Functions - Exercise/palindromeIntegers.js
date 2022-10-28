function palindromeIntegers(arr) {
    for (let i = 0; i < arr.length; i++) {
      let currentOriginalNum = String(arr[i]);
      let reversedNums = currentOriginalNum.split("").reverse().join("");
      if (currentOriginalNum === reversedNums) {
        console.log(true);
      } else {
        console.log(false);
      }
    }
  }
  palindromeIntegers([123, 323, 421, 121]);