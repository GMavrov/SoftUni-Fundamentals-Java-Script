function charactersInRange(char1, char2) {
    let startChar = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let endChar = Math.max(char1.charCodeAt(), char2.charCodeAt());
    let result = "";
    for (let i = startChar; i < endChar - 1; i++) {
      result += `${String.fromCharCode(i + 1)} `;
    }
    console.log(result);
  }
  charactersInRange("#", ":");