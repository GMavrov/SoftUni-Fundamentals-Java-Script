function convertToJSON(fName, lName, hairColor) {
    const personObj = {
      name: fName,
      lastName: lName,
      hairColor: hairColor,
    };
    const personObjAsJson = JSON.stringify(personObj);
    console.log(personObjAsJson);
  }
  convertToJSON("George", "Jones", "Brown");