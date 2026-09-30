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

//* Problem 12: Find Maximum Value in Array  [Easy]
// Description: Write a function findMax(arr) that returns the largest number in an array without using Math.max().
// Example:
// Input: [3, 1, 7, 2, 9]  → Output: 9
// Hint: Loop through and track the largest value found.

function findMax(arr) {
  if (!Array.isArray(arr)) {
    return "Input must be an array";
  }

  if (arr.length === 0) {
    return "Array cannot be empty";
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// *  Test cases
// console.log(findMax([3, 1, 7, 2, 9])); // Output: 9
// console.log(findMax([])); // Output: 'Array cannot be empty'
// console.log(findMax("not an array")); // Output: 'Input must be an array'

//* Problem 13: Remove Duplicates from Array  [Easy]
// Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
// Example:
// Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
// Hint: Use Set or filter() with indexOf().

function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    return "Input must be an array";
  }

  return [...new Set(arr)];
}

// *  Test cases
// console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // Output: [1, 2, 3, 4]
// console.log(removeDuplicates([])); // Output: []
// console.log(removeDuplicates("not an array")); // Output: 'Input must be an array'
