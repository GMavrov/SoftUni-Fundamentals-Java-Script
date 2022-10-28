function daysofWeek(day) {
  let days = [
    "Monday",
    "Tueseday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  if (day >= 1 && day <= 7) {
    console.log(days[day - 1]);
  } else {
    console.log("Invalid day!");
  }
}
daysofWeek([1]);
