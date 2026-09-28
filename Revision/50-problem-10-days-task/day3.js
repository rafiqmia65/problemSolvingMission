//** Day 3 — Functions & Scope */

//* Problem 11: Find the Sum of an Array  [Easy]
// Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.
// Example:
// Input: [1, 2, 3, 4, 5]  → Output: 15
// Hint: Use reduce() or a for loop.

function sumArray(arr) {
  if (!Array.isArray(arr)) {
    return "Input must be an array";
  }

  return arr.reduce((sum, num) => sum + num, 0);

  // let sum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     sum += arr[i];
  //   }

  //   return sum;
}

// *  Test cases
// console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
// console.log(sumArray([])); // Output: 0
// console.log(sumArray("not an array")); // Output: 'Input must be an array'
