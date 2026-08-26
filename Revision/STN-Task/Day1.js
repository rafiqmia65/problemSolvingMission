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
