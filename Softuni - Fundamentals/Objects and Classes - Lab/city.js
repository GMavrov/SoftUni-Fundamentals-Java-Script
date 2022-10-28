function city(cityObj) {
    for (const key of Object.keys(cityObj)) {
      console.log(`${key} -> ${cityObj[key]}`);
    }
  }
  city({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000",
  });