//* Problem 16: Count Object Properties  [Easy]
// Description: Write a function countProperties(obj) that returns the number of properties in an object.
// Example:
// Input: {a: 1, b: 2, c: 3}  → Output: 3
// Hint: Use Object.keys().length.

function countProperties(obj) {
  if (typeof obj !== "object" || obj === null) {
    return "Input must be a non-null object";
  }

  return Object.keys(obj).length;
}

// *  Test cases
console.log(countProperties({ a: 1, b: 2, c: 3 })); // Output: 3
console.log(countProperties({})); // Output: 0
console.log(countProperties("not an object")); // Output: 'Input must be a non-null object'
console.log(countProperties(null)); // Output: 'Input must be a non-null object'
