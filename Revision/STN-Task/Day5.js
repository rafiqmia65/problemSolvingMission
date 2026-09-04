//* Problem 1: Capitalize Each Word
// Write a function capitalizeWords(str) that capitalizes the first letter of each word in a sentence.
// Example: capitalizeWords("hello world from js") → "Hello World From Js"

function capitalizeWords(str) {
  // Check if input is a string
  if (typeof str !== "string") {
    return "Input must be a string.";
  }

  // Split the string into an array of words

  let words = str.split(" ");

  // Capitalize the first letter of each word

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  // Join the words back into a string

  return words.join(" ");
}

console.log(capitalizeWords("hello world from js")); // Output: "Hello World From Js"
console.log(capitalizeWords(123)); // Output: "Input must be a string."
