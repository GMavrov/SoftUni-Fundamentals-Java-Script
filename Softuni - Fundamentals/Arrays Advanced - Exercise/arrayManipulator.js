function arrayManipulator(arr, commands) {
    let line = commands.shift();
    while (line !== "print") {
      let command = line.split(" ");
      if (command[0] === "add") {
        let index = Number(command[1]);
        let el = Number(command[2]);
        arr.splice(index, 0, el);
      }
      if (command[0] === "addMany") {
        let index = Number(command[1]);
        let newArr = command.slice(2).map(Number);
        arr.splice(index, 0, ...newArr);
      }
      if (command[0] === "contains") {
        let element = Number(command[1]);
        let index = arr.indexOf(element);
        index >= 0 ? console.log(index) : console.log(-1);
      }
      if (command[0] === "remove") {
        let index = Number(command[1]);
        arr.splice(index, 1);
      }
      if (command[0] === "shift") {
        let rotations = Number(command[1]);
        for (let i = 0; i < rotations; i++) {
          let element = arr.shift();
          arr.push(element);
        }
      }
      if (command[0] === "sumPairs") {
        let outPut = [];
        if (arr.length % 2 === 0) {
          for (let i = 0; i < arr.length; i += 2) {
            outPut.push(arr[i] + arr[i + 1]);
          }
        } else {
          for (let i = 0; i < arr.length - 1; i += 2) {
            outPut.push(arr[i] + arr[i + 1]);
          }
          outPut.push(arr.pop());
        }
        arr = outPut.slice(0);
        outPut = [];
      }
  
      line = commands.shift();
    }
    console.log(`[ ${arr.join(", ")} ]`);
  }
  arrayManipulator(
    [1, 2, 4, 5, 6, 7],
    ["add 1 8", "contains 1", "contains 3", "print"]
  );