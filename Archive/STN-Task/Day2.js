// Problem 1: Count Vowels
// Write a function countVowels(str) that returns the number of vowels (a, e, i, o, u) in a string.
// Example: countVowels("javascript") → 3

function countVowels(str) {
  if (typeof str !== "string") {
    return "Input must be a string.";
  }
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }
  return count;
}

// console.log(countVowels("javascript")); // Output: 3
// console.log(countVowels("")); // Output: 0
// console.log(countVowels(123)); // Output: "Input must be a string."

// Problem 2: Check Palindrome
// Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
// Example: isPalindrome("racecar") → true, isPalindrome("hello") → false

function isPalindrome(str) {
  if (typeof str !== "string") {
    return "Input must be a string.";
  }
  if (str.length === 0) {
    return "Input string cannot be empty.";
  }

  let reversedString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return str === reversedString;
}

// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello")); // Output: false
// console.log(isPalindrome("")); // Output: "Input string cannot be empty."
// console.log(isPalindrome(123)); // Output: "Input must be a string."
