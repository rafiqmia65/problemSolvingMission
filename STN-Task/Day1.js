// Problem 1: Reverse a String
// Write a function reverseString(str) that takes a string and returns it reversed.
// Example: reverseString("hello") → "olleh"

function reverseString(str) {
  if (typeof str !== "string") {
    return "Input must be a string.";
  }

  if (str.length === 0) {
    return "Input string cannot be empty.";
  }

  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// console.log(reverseString("hello"));
// console.log(reverseString(""));
// console.log(reverseString(123));

// Problem 2: Find the Largest Number
// Write a function findMax(arr) that takes an array of numbers and returns the largest one.
// Example: findMax([3, 7, 2, 9, 1]) → 9

function findMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Input must be a non-empty array.";
  }

  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return "All elements in the array must be numbers.";
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

// console.log(findMax([3, 7, 2, 9, 1])); // Output: 9
// console.log(findMax([])); // Output: "Input must be a non-empty array."
// console.log(findMax([3, 7, "2", 9, 1])); // Output: "All elements in the array must be numbers."
