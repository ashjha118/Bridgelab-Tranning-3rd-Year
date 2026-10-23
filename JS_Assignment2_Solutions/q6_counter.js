// Q6. Event-Based Counter Simulation
let count = 0; // shared counter

function increment() {
  count++;
  console.log(`Incremented -> count = ${count}`);
}

function decrement() {
  count--;
  console.log(`Decremented -> count = ${count}`);
}

// Nested function example: the inner function can read and update the
// outer function's variable (closure / function scope)
function localCounterDemo() {
  let localCount = 0; // visible only inside localCounterDemo and its inner functions

  function bump() {
    localCount++;
    console.log(`  Inner bump() -> localCount = ${localCount}`);
  }

  bump();
  bump();
  console.log(`Outer function sees localCount = ${localCount}`);
}

// Simulate "click" events by calling the functions manually
console.log("--- Simulated clicks ---");
increment(); // click +
increment(); // click +
increment(); // click +
decrement(); // click -
console.log(`Final count: ${count}`);

console.log("--- Nested function scope ---");
localCounterDemo();
