// Problem 1: FizzBuzz
// Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3 print 'Fizz', for multiples of 5 print 'Buzz', for multiples of both print 'FizzBuzz'.
// Example: fizzBuzz(15) prints: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

function fizzBuzz(n) {
  // Validate input
  if (typeof n !== "number" || n <= 0) {
    return "Input must be a positive integer.";
  }

  let result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }

  return result;
}

// console.log(fizzBuzz(15)); // Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz
// console.log(fizzBuzz(-5)); // Output: "Input must be a positive integer."
// console.log(fizzBuzz("15")); // Output: "Input must be a positive integer."

// Problem 2: Sum of Array
// Write a function sumArray(arr) that returns the sum of all numbers in an array using reduce().
// Example: sumArray([1, 2, 3, 4, 5]) → 15

function sumArray(arr) {
  // Check if input is an array
  if (!Array.isArray(arr)) {
    return "Input must be an array.";
  }

  // Empty array
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;

  // Loop through array
  for (let i = 0; i < arr.length; i++) {
    // Check if element is a number
    if (typeof arr[i] !== "number") {
      return "All elements in the array must be numbers.";
    }

    // Add element to sum
    sum += arr[i];
  }

  return sum;
}

// console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
// console.log(sumArray([])); // Output: 0
// console.log(sumArray([1, 2, "3", 4, 5])); // Output: "All elements in the array must be numbers."
