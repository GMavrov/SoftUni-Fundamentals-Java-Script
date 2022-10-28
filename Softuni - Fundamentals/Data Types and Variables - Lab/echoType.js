function echoType(parameter) {
    if (typeof parameter === "string") {
      console.log(typeof parameter);
      console.log(parameter);
    } else if (typeof parameter === "number") {
      console.log(typeof parameter);
      console.log(parameter);
    }else{
      console.log(typeof parameter);
      console.log("Parameter is not suitable for printing");
    }
  }
  echoType("Hello, JavaScript!");