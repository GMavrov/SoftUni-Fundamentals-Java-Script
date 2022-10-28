function theatrePromotions(day, age) {
    let total = 0;
    if (day === "Weekday") {
      if (age >= 0 && age <= 18) {
        total += 12;
      } else if (age >= 18 && age <= 64) {
        total += 18;
      } else if (age >= 64 && age <= 122) {
        total += 12;
      }
    } else if (day === "Weekend") {
      if (age >= 0 && age <= 18) {
        total += 15;
      } else if (age >= 18 && age <= 64) {
        total += 20;
      } else if (age >= 64 && age <= 122) {
        total += 15;
      }
    } else if (day === "Holiday") {
      if (age >= 0 && age <= 18) {
        total += 5;
      } else if (age >= 18 && age <= 64) {
        total += 12;
      } else if (age >= 64 && age <= 122) {
        total += 10;
      }
    }
    if (age >= 0 && age <= 122) {
      console.log(`${total}$`);
    } else {
      console.log("Error!");
    }
  }
  theatrePromotions("Weekday", 42);