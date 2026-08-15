// Write a JavaScript function `checkNumber ` that takes a number as input and checks whether the number is positive, negative, or zero. The function should return a string indicating the result.

// Test Case 1:
// Input: 5
// Output: "Positive"

// Test Case 2:
// Input: -3
// Output: "Negative"

// Test Case 3:
// Input: 0
// Output: "Zero"

// Test Case 4:
// Input: 100.5
// Output: "Positive"

// Test Case 5:
// Input: -0.001
// Output: "Negative"

// Test Case 6:
// Input: -0
// Output: "Zero"

// Test Case 7:
// Input: "5"
// Output: "Invalid input"

function checkNumber(number) {
  if (typeof number !== "number") {
    return "Invalid input";
  }

  if (number > 0) {
    return "Positive";
  }

  if (number < 0) {
    return "Negative";
  }

  return "Zero";
}

console.log(checkNumber("5")); // Output: "Invalid input"
console.log(checkNumber(5)); // Output: "Positive"
console.log(checkNumber(-3)); // Output: "Negative"
console.log(checkNumber(0)); // Output: "Zero"
console.log(checkNumber(100.5)); // Output: "Positive"
console.log(checkNumber(-0.001)); // Output: "Negative"
console.log(checkNumber(-0)); // Output: "Zero"
