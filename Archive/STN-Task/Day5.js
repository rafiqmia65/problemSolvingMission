// Problem 1: Capitalize Each Word
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

// console.log(capitalizeWords("hello world from js")); // Output: "Hello World From Js"
// console.log(capitalizeWords(123)); // Output: "Input must be a string."

// Problem 2: Fibonacci Sequence
// Write a function fibonacci(n) that returns an array containing the first n numbers of the Fibonacci sequence.
// Example: fibonacci(7) → [0, 1, 1, 2, 3, 5, 8]

function fibonacci(number) {
  // Check if input is a number
  if (typeof number !== "number" || number < 0) {
    return "Input must be a non-negative number.";
  }

  let fibSequence = [];

  for (let i = 0; i < number; i++) {
    if (i === 0) {
      fibSequence.push(0);
    } else if (i === 1) {
      fibSequence.push(1);
    } else {
      fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
  }
  return fibSequence;
}

// console.log(fibonacci(7)); // Output: [0, 1, 1, 2, 3, 5, 8]
// console.log(fibonacci(-1)); // Output: "Input must be a non-negative number."
// console.log(fibonacci("not a number")); // Output: "Input must be a non-negative number."
