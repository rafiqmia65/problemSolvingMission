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
