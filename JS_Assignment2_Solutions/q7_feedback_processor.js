// Q7. Customer Feedback Processor
const feedback = "Great product! Fast delivery and amazing sound quality!";

// Count words: split on whitespace (filter removes empty strings)
const wordCount = feedback.trim().split(/\s+/).filter(Boolean).length;

// Check for negative words (lowercase so the check is case-insensitive)
const lowerFeedback = feedback.toLowerCase();
const hasNegative = lowerFeedback.includes("bad") || lowerFeedback.includes("poor");

console.log(`Feedback: "${feedback}"`);
console.log(`Word count: ${wordCount}`);

if (!hasNegative) {
  console.log("Positive Feedback");
} else {
  console.log("Needs Improvement");
}
