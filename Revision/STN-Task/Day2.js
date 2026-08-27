//* Problem 1: Count Vowels
// Write a function countVowels(str) that returns the number of vowels (a, e, i, o, u) in a string.
// Example: countVowels("javascript") → 3

function countVowels(str) {
  if (typeof str !== "string") {
    return "Input must be a string.";
  }

  const vowels = "aeiou";

  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("javascript")); // Output: 3
console.log(countVowels("")); // Output: 0
console.log(countVowels(123)); // Output: "Input must be a string."