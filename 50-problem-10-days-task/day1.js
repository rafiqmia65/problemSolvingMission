//* Problem 1: Swap Two Variables  [Easy]
// Description: Write a function that swaps the values of two variables without using a third variable.
// Example:
// Input: a = 5, b = 10Output: a = 10, b = 5
// Hint: Try using destructuring or arithmetic operators.

function swap(a, b) {
  // Using destructuring assignment
  [a, b] = [b, a];

  // Using arithmetic operators
  // a = a + b; // a now holds the sum of a and b
  // b = a - b; // b now holds the original value of a
  // a = a - b; // a now holds the original value of b

  return [a, b];
}

//* Test cases
// console.log(swap(5, 10)); // [10, 5]

//* Problem 2: Check Even or Odd  [Easy]
// Description: Write a function isEven(n) that returns true if a number is even, and false if it is odd.
// Example:
// Input: 4  → Output: trueInput: 7  → Output: false
// Hint: Use the modulus (%) operator.

const isEven = (n) => {
  if (typeof n !== "number") {
    return "Input must be a number.";
  }

  if (n % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

//* Test cases
// console.log(isEven(4)); // true
// console.log(isEven(7)); // false
// console.log(isEven("not a number")); // "Input must be a number."

//* Problem 3: Find the Largest of Three Numbers  [Easy]
// Description: Write a function largest(a, b, c) that returns the largest of three numbers.
// Example:
// Input: 3, 7, 5  → Output: 7
// Hint: Use Math.max() or if-else conditions.

const largest = (a, b, c) => {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return "All inputs must be numbers.";
  }

  // Using if-else conditions
  if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }

  // return Math.max(a, b, c);
};

//* Test cases
// console.log(largest(3, 7, 5)); // 7
// console.log(largest(10, 2, 8)); // 10
// console.log(largest("not a number", 2, 8)); // "All inputs must be numbers."

//* Problem 4: Celsius to Fahrenheit  [Easy]
// Description: Write a function toFahrenheit(celsius) that converts a Celsius temperature to Fahrenheit.
// Example:
// Input: 0   → Output: 32Input: 100 → Output: 212
// Hint: Formula: (C × 9/5) + 32

const toFahrenheit = (celsius) => {
  if (typeof celsius !== "number") {
    return "Input must be a number.";
  }
  return (celsius * 9) / 5 + 32;
};

//* Test cases
// console.log(toFahrenheit(0)); // 32
// console.log(toFahrenheit(100)); // 212
// console.log(toFahrenheit("not a number")); // "Input must be a number."

//* Problem 5: Check Positive, Negative or Zero  [Easy]
// Description: Write a function checkSign(n) that returns 'positive', 'negative', or 'zero' based on the value of n.
// Example:
// Input: -5  → Output: 'negative'Input: 0   → Output: 'zero'
// Hint: Use if-else if-else statements.

const checkSign = (n) => {
  if (typeof n !== "number" || Number.isNaN(n)) {
    return "Input must be a valid number.";
  }
  if (n > 0) {
    return "positive";
  } else if (n < 0) {
    return "negative";
  } else {
    return "zero";
  }
};

//* Test cases
// console.log(checkSign(-5)); // 'negative'
// console.log(checkSign(0)); // 'zero'
// console.log(checkSign(10)); // 'positive'
// console.log(checkSign("not a number")); // "Input must be a number."
