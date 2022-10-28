function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;
    let dungeon = arr[0].split("|");
    for (let i = 0; i < dungeon.length; i++) {
      let newArr = dungeon[i].split(" ");
      if (newArr[0] === "potion" && health < 100) {
        let value = Number(newArr[1]);
        if (health + value > 100) {
          value = 100 - health;
        }
        health += value;
        console.log(`You healed for ${value} hp.`);
        console.log(`Current health: ${health} hp.`);
      } else if (newArr[0] === "chest") {
        coins += Number(newArr[1]);
        console.log(`You found ${newArr[1]} coins.`);
      } else {
        health -= newArr[1];
        if (health > 0) {
          console.log(`You slayed ${newArr[0]}.`);
        } else {
          console.log(`You died! Killed by ${newArr[0]}.`);
          console.log(`Best room: ${i + 1}`);
          break;
        }
      }
    }
    if (health > 0) {
      console.log("You've made it!");
      console.log(`Coins: ${coins}`);
      console.log(`Health: ${health}`);
    }
  }
  dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);