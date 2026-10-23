// Q10. Citizen Eligibility Validator
const age = 19;
const isCitizen = true;

// Note: the 18-20 case must be checked before "all services",
// so "all services" is applied for citizens aged 21 and above.
if (isCitizen) {
  if (age >= 21) {
    console.log("Eligible for all services.");
  } else if (age >= 18 && age <= 20) {
    console.log("Eligible to vote only.");
  } else {
    console.log("Not eligible yet.");
  }
} else {
  if (age >= 18) {
    console.log("Only age criteria met.");
  } else {
    console.log("Not eligible yet.");
  }
}
