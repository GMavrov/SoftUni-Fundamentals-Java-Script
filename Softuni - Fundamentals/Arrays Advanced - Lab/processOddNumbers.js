function processOddNumbers(arr) {
    return arr
    .filter((x, i) => i % 2 !== 0)
    .map((x) => x * 2)
    .reverse()
    .join(" ");
}
processOddNumbers([10, 15, 20, 25]);