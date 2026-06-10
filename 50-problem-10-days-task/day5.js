//**Day 5 — Functions & Scope */

//* Problem 21: Factorial (Recursive)  [Easy]
// Description: Write a recursive function factorial(n) that returns the factorial of a non-negative integer n.
// Example:
// Input: 5  → Output: 120 (5×4×3×2×1)Input: 0  → Output: 1
// Hint: Base case: factorial(0) = 1. Recursive case: n * factorial(n-1).

function factorial(n) {
  if (typeof n !== "number" || n < 0) {
    return "Input must be a non-negative integer";
  }
  //   if (n === 0) {
  //     return 1;
  //   }
  //   return n * factorial(n - 1);

  // Alternative using a loop
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

//* Test cases
// console.log(factorial(5)); // Output: 120
// console.log(factorial(0)); // Output: 1
// console.log(factorial(-1)); // Output: 'Input must be a non-negative integer'
// console.log(factorial("not a number")); // Output: 'Input must be a non-negative integer'
