var grades = [100, 50, 75, 97];

var totalGrade = 0;

grades.push(89);

grades.forEach(function (grade){
  totalGrade = totalGrade + grade;
  console.log("Current total is " + totalGrade);
});

console.log("Average grade = " + totalGrade / grades.length);
console.log("Out of " + grades.length + " grades");
