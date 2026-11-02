// Q2. Multi-Type Data Summary
const userName = "Riya";
const userAge = 21;
const isActive = true;
const hobbies = ["reading", "coding", "chess"];
const profile = { city: "Meerut", course: "B.Tech" };
const lastLogin = null;
let phoneNumber; // undefined

// Helper: returns the correct type label
// (typeof gives "object" for arrays and null, so handle them separately)
function getType(value) {
  if (Array.isArray(value)) return "array";
  if (value === null) return "null";
  return typeof value;
}

const entries = [
  { label: "userName", value: userName },
  { label: "userAge", value: userAge },
  { label: "isActive", value: isActive },
  { label: "hobbies", value: hobbies },
  { label: "profile", value: profile },
  { label: "lastLogin", value: lastLogin },
  { label: "phoneNumber", value: phoneNumber },
];

// Build rows: label + value + type
const report = entries.map(({ label, value }) => ({
  Label: label,
  Value: Array.isArray(value) ? value.join(", ") : typeof value === "object" && value !== null ? JSON.stringify(value) : String(value),
  Type: getType(value),
}));

console.table(report); // single console.table statement
