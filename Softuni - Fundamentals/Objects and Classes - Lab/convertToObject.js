function convertToObject(inputJson) {
    const obj = JSON.parse(inputJson);
    for (const key of Object.keys(obj)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
  convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');