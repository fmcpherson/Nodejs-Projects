var grades = [100, 50, 75, 25];

var totalGrade = 0;

grades.forEach(function (grade){
  totalGrade = totalGrade + grade;
});

console.log("Average grade = " + totalGrade / grades.length);
console.log("Out of " + grades.length + " grades");
