function gladiatorInventory(arr) {
    let inventory = arr.shift().split(" ");
    for (let i = 0; i < arr.length; i++) {
      let [command, item] = arr[i].split(" ");
      switch (command) {
        case "Buy":
          buy(item);
          break;
        case "Trash":
          trash(item);
          break;
        case "Repair":
          repair(item);
          break;
        case "Upgrade":
          upgrade(item);
          break;
      }
    }
    function buy(item) {
      let index = inventory.indexOf(item);
      if (index < 0) {
        inventory.push(item);
      }
    }
    function trash(item) {
      let index = inventory.indexOf(item);
      if (index >= 0) {
        inventory.splice(index, 1);
      }
    }
    function repair(item) {
      let index = inventory.indexOf(item);
      if (index >= 0) {
        inventory.splice(index, 1);
        inventory.push(item);
      }
    }
    function upgrade(item) {
      let splittedItem = item.split("-");
      let index = inventory.indexOf(splittedItem[0]);
      if (index >= 0) {
        inventory.splice(index + 1, 0, `${splittedItem[0]}:${splittedItem[1]}`);
      }
    }
    console.log(inventory.join(" "));
  }
  gladiatorInventory([
    "SWORD Shield Spear",
    "Buy Bag",
    "Trash Shield",
    "Repair Spear",
    "Upgrade SWORD-Steel",
  ]);