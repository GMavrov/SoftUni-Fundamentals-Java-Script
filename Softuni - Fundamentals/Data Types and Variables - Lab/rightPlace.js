function rightPlace(wrongString, char, string) {
    const newStr = wrongString.replace("_", char);
    newStr === string ? console.log("Matched") : console.log("Not Matched");
  }
  rightPlace("Str_ng", "i", "String");