// Q3. Monthly Expense Tracker
const expenses = [4500, 2200, 12000, 3100, 1800]; // food, travel, rent, bills, leisure
const categories = ["Food", "Travel", "Rent", "Bills", "Leisure"];

let total = 0;
for (let i = 0; i < expenses.length; i++) {
  total += expenses[i]; // assignment operator
}

const average = total / expenses.length;

let finalAmount = total;
finalAmount += total * 0.10; // add 10% tax

console.log("Expenses:");
categories.forEach((c, i) => console.log(`  ${c}: ${expenses[i].toFixed(2)}`));
console.log(`Total: ${total.toFixed(2)}`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Final amount after 10% tax: ${finalAmount.toFixed(2)}`);
