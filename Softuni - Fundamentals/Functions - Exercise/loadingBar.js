function loadingBar(percent) {
    let percentageString = "%".repeat(percent / 10);
    let dotString = ".".repeat((100 - percent) / 10);
    if (percent === 100) {
      console.log("100% Complete!");
    } else {
      console.log(`${percent}% [${percentageString}${dotString}]`);
      console.log("Still loading...");
    }
  }
  loadingBar(100);