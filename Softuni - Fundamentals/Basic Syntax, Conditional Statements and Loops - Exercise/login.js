function login(input) {
  let username = input[0];
  let fail = 0;

  let correctPass = username.split("").reverse().join("");

  for (let i = 1; i <= input.length + 1; i++) {
    if (input[i] != correctPass) {
      fail++;
      if (fail == 4) {
        console.log(`User ${username} blocked!`);
        break;
      }
      console.log("Incorrect password. Try again.");
    } else {
      console.log("User " + username + " logged in.");
      break;
    }
  }
}
login(["Acer", "login", "go", "let me in", "recA"]);
