function houseParty(arr) {
    let resArr = [];
    for (const el of arr) {
      let command = el.split(" ");
      let name = command[0];
  
      if (command.length === 3) {
        if (resArr.includes(name)) {
          console.log(`${name} is already in the list!`);
        } else {
          resArr.push(name);
        }
      } else {
        if (!resArr.includes(name)) {
          console.log(`${name} is not in the list!`);
        } else {
          let index = resArr.indexOf(name);
          resArr.splice(index, 1);
        }
      }
    }
    console.log(resArr.join("\n"));
  }
  houseParty([
    "Tom is going!",
    "Annie is going!",
    "Tom is going!",
    "Garry is going!",
    "Jerry is going!",
  ]);