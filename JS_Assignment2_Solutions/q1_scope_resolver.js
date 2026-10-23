// Q1. Scope Conflict Resolver

// Global variable: accessible everywhere in the file
const bonus = 5000;

function calculateSalary(isPermanent) {
  // Local variable: exists only inside this function
  const salary = 40000;

  let totalSalary = salary;

  // Add the global bonus only for permanent employees
  if (isPermanent) {
    totalSalary += bonus;
  }

  console.log(`isPermanent = ${isPermanent} -> Total salary: ${totalSalary}`);
}

// Demonstration: changing isPermanent changes only the function's result
calculateSalary(true);   // 45000 (bonus added)
calculateSalary(false);  // 40000 (no bonus)

// Scope check: the global stays unchanged, the locals are not visible outside
console.log(`Global bonus after calls: ${bonus}`);          // still 5000
console.log(`typeof salary outside function: ${typeof salary}`);           // undefined
console.log(`typeof isPermanent outside function: ${typeof isPermanent}`); // undefined
