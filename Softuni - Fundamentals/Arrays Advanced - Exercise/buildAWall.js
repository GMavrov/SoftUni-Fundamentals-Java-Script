function buildAWall(arr) {
    let copyArr = arr.slice(0).map(Number);
    let totalConcreteForCurrentDay = 0;
    let concrete = [];
    let totalCrews = copyArr.filter((len) => len < 30).length;
    while (totalCrews !== 0) {
      let concreteByAllCrews = 0;
      for (let i = 0; i < copyArr.length; i++) {
        if (copyArr[i] !== 30) {
          copyArr[i]++;
          concreteByAllCrews += 195;
          if (copyArr[i] === 30) {
            totalCrews--;
          }
        }
      }
      totalConcreteForCurrentDay += concreteByAllCrews;
      concrete.push(concreteByAllCrews);
    }
    let costs = totalConcreteForCurrentDay * 1900;
    console.log(concrete.join(", "));
    console.log(`${costs} pesos`);
  }
  buildAWall([21, 25, 28]);