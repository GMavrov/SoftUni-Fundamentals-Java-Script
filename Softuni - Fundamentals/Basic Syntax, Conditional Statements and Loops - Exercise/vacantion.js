function vacation(groupCount, groupType, dayType) {
  switch (dayType) {
    case "Friday":
      switch (groupType) {
        case "Students":
          if (groupCount <= 30) {
            let price = groupCount * 8.45;
            console.log(`Total price: ${price.toFixed(2)}`);
          } else {
            let priceDiscount = groupCount * 8.45 * 0.85;
            console.log("Total price: " + priceDiscount.toFixed(2));
          }
          break;

        case "Business":
          if (groupCount < 100) {
            let price = groupCount * 16;
            console.log(`Total price: ${price.toFixed(2)}`);
          } else {
            let priceDiscount = (groupCount -= 10) * 16;
            console.log("Total price: " + priceDiscount.toFixed(2));
          }
          break;

        case "Regular":
          if (groupCount <= 10) {
            let price = groupCount * 15;
            console.log(`Total price: ${price.toFixed(2)}`);
          } else if (groupCount >= 10 && groupCount <= 20) {
            let priceDiscount = groupCount * 15 * 0.95;
            console.log("Total price: " + priceDiscount.toFixed(2));
          } else {
            console.log("Total price: " + (groupCount * 15).toFixed(2));
          }
          break;
      }
      break;

    case "Saturday":
      switch (groupType) {
        case "Students":
          if (groupCount <= 30) {
            let price = groupCount * 9.8;
            console.log(`Total price: ${price.toFixed(2)}`);
          } else {
            let priceDiscount = groupCount * 9.8 * 0.85;
            console.log("Total price: " + priceDiscount.toFixed(2));
          }
          break;

        case "Business":
          if (groupCount < 100) {
            let price = groupCount * 15.6;
            console.log(`Total price: ${price.toFixed(2)}`);
          } else {
            let priceDiscount = (groupCount -= 10) * 15.6;
            console.log("Total price: " + priceDiscount.toFixed(2));
          }
          break;

        case "Regular":
          if (groupCount <= 10) {
            let price = groupCount * 20;
            console.log(`Total price: ${price.toFixed(2)}`);
          } else if (groupCount >= 10 && groupCount <= 20) {
            let priceDiscount = groupCount * 20 * 0.95;
            console.log("Total price: " + priceDiscount.toFixed(2));
          } else {
            console.log("Total price: " + (groupCount * 20).toFixed(2));
          }
          break;
      }
      break;

    case "Sunday":
      switch (groupType) {
        case "Students":
          if (groupCount <= 30) {
            let price = groupCount * 10.46;
            console.log(`Total price: ${price.toFixed(2)}`);
          } else {
            let priceDiscount = groupCount * 10.46 * 0.85;
            console.log("Total price: " + priceDiscount.toFixed(2));
          }
          break;

        case "Business":
          if (groupCount < 100) {
            let price = groupCount * 16;
            console.log(`Total price: ${price.toFixed(2)}`);
          } else {
            let priceDiscount = (groupCount -= 10) * 16;
            console.log("Total price: " + priceDiscount.toFixed(2));
          }
          break;

        case "Regular":
          if (groupCount <= 10) {
            let price = groupCount * 22.5;
            console.log(`Total price: ${price.toFixed(2)}`);
          } else if (groupCount >= 10 && groupCount <= 20) {
            let priceDiscount = groupCount * 22.5 * 0.95;
            console.log("Total price: " + priceDiscount.toFixed(2));
          } else {
            console.log("Total price: " + (groupCount * 22.5).toFixed(2));
          }
          break;
      }
      break;
  }
}
vacation(
  40,

  "Regular",

  "Saturday"
);
