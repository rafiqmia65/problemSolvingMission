//* Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

function swapVariables(a, b) {
  [a, b] = [b, a];
  return [a, b];
}

//* Test Cases
// console.log(swapVariables(5, 10)); // Output: [10, 5]

//* Problem 2: Check Even or Odd  [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: trueInput: 7  → Output: false
// Hint: Use the modulus (%) operator.

function isEven(n) {
  if (typeof n !== "number") {
    return "Input must be a number.";
  }

  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

//* Test Cases
// console.log(isEven(4)); // Output: true
// console.log(isEven(7)); // Output: false
// console.log(isEven("not a number")); // Output: "Input must be a number."

//* Problem 3: Find the Largest of Three Numbers  [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.
// Example:
// Input: 3, 7, 5  → Output: 7
// Hint: Use Math.max() or if-else conditions.

function largest(a, b, c) {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return "All inputs must be numbers.";
  }

  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

//* Test Cases
// console.log(largest(3, 7, 5)); // Output: 7
// console.log(largest(10, 2, 8)); // Output: 10
// console.log(largest(1, 1, 1)); // Output: 1
// console.log(largest("not a number", 2, 3)); // Output: "All inputs must be numbers."

//* Problem 4: Celsius to Fahrenheit  [Easy]
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
// Example:
// Input: 0   → Output: 32Input: 100 → Output: 212
// Hint: Formula: (C × 9/5) + 32

function toFahrenheit(celsius) {
  if (typeof celsius !== "number") {
    return "Input must be a number.";
  }

  return (celsius * 9) / 5 + 32;
}

//* Test Cases
// console.log(toFahrenheit(0)); // Output: 32
// console.log(toFahrenheit(100)); // Output: 212
// console.log(toFahrenheit("not a number")); // Output: "Input must be a number."
