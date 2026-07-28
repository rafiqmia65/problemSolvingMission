// Write a JavaScript function `countWords`  that takes a string and returns the number of words contained in this string.

// Example:
// Input: "DEV ZeroOne is a Next-Gen Programming Learning Platform."
// Output: 8

// Constraints:
// **using built-in functions is prohibited**

function countWords(sentence) {
  if (typeof sentence !== "string") {
    return 0;
  }

  let count = 0;
  let inWord = false;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (!inWord) {
        count++;
        inWord = true;
      }
    } else {
      inWord = false;
    }
  }

  return count;
}

const countWord = "DEV ZeroOne is a Next-Gen Programming Learning Platform.";

console.log(countWords(countWord));
