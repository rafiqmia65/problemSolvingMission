//* Problem 21: Factorial (Recursive)  [Easy]
// Description: Write a recursive function factorial(n) that returns the factorial of a non-negative integer n.
// Example:
// Input: 5  → Output: 120 (5×4×3×2×1)Input: 0  → Output: 1
// Hint: Base case: factorial(0) = 1. Recursive case: n * factorial(n-1).

function factorial(n) {
  if (typeof n !== "number" || n < 0) {
    return "Input must be a non-negative integer";
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
}

// * Test cases
// console.log(factorial(5)); // Output: 120
// console.log(factorial(0)); // Output: 1
// console.log(factorial(-1)); // Output: 'Input must be a non-negative integer'
// console.log(factorial("not a number")); // Output: 'Input must be a non-negative integer'

//* Problem 22: Fibonacci Sequence  [Easy]
// Description: Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence.
// Example:
// Input: 6  → Output: 8 (0,1,1,2,3,5,8...)
// Hint: Try both iterative and recursive approaches.

function fibonacci(n) {
  if (typeof n !== "number" || n < 0) {
    return "Input must be a non-negative integer";
  }

  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibonacci(n - 1) + fibonacci(n - 2);
}

// * Test cases
// console.log(fibonacci(6)); // Output: 8
// console.log(fibonacci(0)); // Output: 0
// console.log(fibonacci(1)); // Output: 1
// console.log(fibonacci(-1)); // Output: 'Input must be a non-negative integer'
