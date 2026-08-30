//* Problem 1: FizzBuzz
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

console.log(fizzBuzz(15)); // Output: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]

//* Problem 2: Sum of Array
// Write a function sumArray(arr) that returns the sum of all numbers in an array using reduce().
// Example: sumArray([1, 2, 3, 4, 5]) → 15

function sumArray(arr) {
  // Validate input
  if (!Array.isArray(arr)) {
    return "Input must be an array.";
  }

  // return arr.reduce((accumulator, currentValue) => {
  //   if (typeof currentValue !== "number") {
  //     throw new Error("All elements in the array must be numbers.");
  //   }
  //   return accumulator + currentValue;
  // }, 0);

  //** Another approach */
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      throw new Error("All elements in the array must be numbers.");
    }
    sum += arr[i];
  }

  return sum;
}

console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([])); // Output: 0
