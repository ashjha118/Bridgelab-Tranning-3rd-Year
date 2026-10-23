// Q8. Dynamic Discount Evaluator

function evaluateCart(cart) {
  // Original total (before any discount) using reduce()
  const originalTotal = cart.reduce((sum, product) => sum + product.price, 0);

  // Apply category discounts using a loop and conditionals
  const discountedPrices = [];
  for (const product of cart) {
    let discountPercent = 0;
    if (product.category === "electronics") {
      discountPercent = 10;
    } else if (product.category === "fashion") {
      discountPercent = 5;
    }
    const finalPrice = product.price - (product.price * discountPercent) / 100;
    discountedPrices.push(finalPrice);
    console.log(`${product.item}: ${product.price} - ${discountPercent}% = ${finalPrice}`);
  }

  // Total after category discounts using reduce()
  let finalTotal = discountedPrices.reduce((sum, price) => sum + price, 0);

  // Extra 5% overall discount if the original cart value is above 50000
  if (originalTotal > 50000) {
    finalTotal -= finalTotal * 0.05;
    console.log("Extra 5% overall discount applied (cart > 50000)");
  }

  console.log(`Original total: ${originalTotal}`);
  console.log(`Final total: ${finalTotal.toFixed(2)}\n`);
}

// Cart from the assignment
const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];
console.log("--- Cart 1 ---");
evaluateCart(cart);

// Extra test: bigger cart to trigger the 5% overall discount
const bigCart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Phone", category: "electronics", price: 20000 },
  { item: "Shoes", category: "fashion", price: 2500 },
];
console.log("--- Cart 2 (large) ---");
evaluateCart(bigCart);
