function train(arr) {
    let allPassangers = arr.shift().split(" ").map(Number);
    let maxPassangersPerWagon = Number(arr.shift());
    for (let i = 0; i < arr.length; i++) {
      let command = arr[i].split(" ");
      if (command[0] === "Add") {
        let value = command[1];
        allPassangers.push(Number(value));
      } else {
        for (let j = 0; j < allPassangers.length; j++) {
          // console.log(Number(command[0]) + allPassangers[j]);
          if (Number(command[0]) + allPassangers[j] <= maxPassangersPerWagon) {
            allPassangers[j] += Number(command[0]);
            break;
          }
        }
      }
    }
    console.log(allPassangers.join(" "));
  }