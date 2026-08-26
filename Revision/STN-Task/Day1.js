//* Problem 1: Reverse a String
// Write a function reverseString(str) that takes a string and returns it reversed.
// Example: reverseString("hello") → "olleh"

function reverseString(str) {
  if (typeof str !== "string") {
    return "Input must be a string.";
  }

  if (str.length === 0) {
    return "Input string cannot be empty.";
  }

  //   return str.split("").reverse().join("");

  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

console.log(reverseString("hello")); // Output: "olleh"
console.log(reverseString("")); // Output: "Input string cannot be empty."
console.log(reverseString(123)); // Output: "Input must be a string."

//* Problem 2: Find the Largest Number
// Write a function findMax(arr) that takes an array of numbers and returns the largest one.
// Example: findMax([3, 7, 2, 9, 1]) → 9

function findMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return "Input must be a non-empty array.";
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log(findMax([3, 7, 2, 9, 1])); // Output: 9
console.log(findMax([])); // Output: "Input must be a non-empty array."
console.log(findMax("not an array")); // Output: "Input must be a non-empty array."
