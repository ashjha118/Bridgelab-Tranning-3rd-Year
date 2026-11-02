// Q4. Array Performance Analyzer

// Create 8 random scores between 30 and 100 (inclusive)
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);

const highest = Math.max(...scores);
const lowest = Math.min(...scores);
const average = scores.reduce((sum, s) => sum + s, 0) / scores.length;

// filter() keeps only passing scores (>= 50)
const passedScores = scores.filter((s) => s >= 50);

// map() builds a Pass/Fail label for each score
const status = scores.map((s) => (s >= 50 ? "Pass" : "Fail"));

console.log(`
===== Performance Summary =====
Scores        : ${scores.join(", ")}
Status        : ${status.join(", ")}
Highest       : ${highest}
Lowest        : ${lowest}
Average       : ${average.toFixed(2)}
Passed (>=50) : ${passedScores.length} of ${scores.length}
===============================`);
