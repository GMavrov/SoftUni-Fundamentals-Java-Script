function repeatString(str, amountOfTimes) {
    let repeatedString = "";
    for (let i = 0; i < amountOfTimes; i++) {
      repeatedString += str;
    }
    console.log(repeatedString);
  }
  repeatString("abc", 3);