function arrayManipulations(arr) {
    let arrOfNumbers = arr.shift().split(" ");
    for (const el of arr) {
      let [command, number, index] = el.split(" ");
  
      switch (command) {
        case "Add":
          arrOfNumbers.push(number);
          break;
        case "Remove":
          let newArr = arrOfNumbers.filter((x) => x != number);
          arrOfNumbers = newArr;
          break;
        case "RemoveAt":
          arrOfNumbers.splice(number, 1);
          break;
        case "Insert":
          arrOfNumbers.splice(index, 0, number);
          break;
      }
    }
    console.log(arrOfNumbers.join(" "));
  }
  arrayManipulations([
    "6 12 2 65 6 42",
    "Add 8",
    "Remove 12",
    "RemoveAt 3",
    "Insert 6 2",
  ]);