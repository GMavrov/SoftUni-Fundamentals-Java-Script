function formatGrade(grade) {
    let formattedGrade = grade.toFixed(2);
    if (formattedGrade < 3.0) {
      formattedGrade = 2;
      console.log(`Fail (${formattedGrade})`);
    } else if (formattedGrade < 3.5) {
      console.log(`Poor (${formattedGrade})`);
    } else if (formattedGrade < 4.5) {
      console.log(`Good (${formattedGrade})`);
    } else if (formattedGrade < 5.5) {
      console.log(`Very good (${formattedGrade})`);
    } else {
      console.log(`Excellent (${formattedGrade})`);
    }
  }
  formatGrade(5.51);