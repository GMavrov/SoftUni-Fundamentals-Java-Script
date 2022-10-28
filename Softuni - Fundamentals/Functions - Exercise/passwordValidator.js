function passwordValidator(pass) {
    let digitCounter = 0;
    let isSymbol = false;
    for (let i = 0; i < pass.length; i++) {
      let currentCharNum = pass[i].charCodeAt();
      let = isDigit = currentCharNum >= 48 && currentCharNum <= 57;
      let = isSmallChar = currentCharNum >= 97 && currentCharNum <= 122;
      let = isBigChar = currentCharNum >= 65 && currentCharNum <= 90;
  
      if (isDigit) {
        digitCounter++;
      }
      if (!isDigit && !isSmallChar && !isBigChar) {
        isSymbol = true;
      }
    }
    if (pass.length < 6 || pass.length > 10) {
      console.log(`Password must be between 6 and 10 characters`);
    }
    if (isSymbol) {
      console.log(`Password must consist only of letters and digits`);
    }
    if (digitCounter < 2) {
      console.log(`Password must have at least 2 digits`);
    }
    if (
      digitCounter >= 2 &&
      !isSymbol &&
      (pass.length >= 6 || pass.length <= 10)
    ) {
      console.log("Password is valid");
    }
  }
  passwordValidator("logIn");