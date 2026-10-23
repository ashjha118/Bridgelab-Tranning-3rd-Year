// Q4. Academic Performance Evaluator
const marks = [78, 85, 92, 66, 74]; // marks out of 100 for 5 subjects
const maxMarksPerSubject = 100;

let totalMarks = 0;
for (const m of marks) totalMarks += m;

const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * maxMarksPerSubject)) * 100;

// Validation: any subject below 35 -> automatic detention
const failedASubject = marks.some((m) => m < 35);

let result;
if (failedASubject) {
  result = "Detained";
} else if (percentage >= 85) {
  result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
  result = "Promoted";
} else {
  result = "Detained";
}

console.log(`Marks: ${marks.join(", ")}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
