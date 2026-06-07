// Problem 6: Reverse a String  [Easy]
// Description: Write a function reverseString(str) that returns the reverse of a given string.
// Example:
// Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
// Hint: Use split(''), reverse(), and join('').

function reverseString(str) {
  if (typeof str !== "string") {
    return "Input must be a string";
  }

  //   return str.split("").reverse().join("");

  // Alternative approach using a loop

  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Test cases
// console.log(reverseString("hello")); // Output: 'olleh'
// console.log(reverseString("world")); // Output: 'dlrow'
// console.log(reverseString(123)); // Output: 'Input must be a string'

// Problem 7: Count Vowels in a String  [Easy]
// Description: Write a function countVowels(str) that counts and returns the number of vowels (a, e, i, o, u) in a string.
// Example:
// Input: 'hello'   → Output: 2Input: 'javascript' → Output: 3
// Hint: Use a loop or match() with a regular expression.

function countVowels(str) {
  if (typeof str !== "string") {
    return "Input must be a string";
  }

  // Using a loop
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

// Test cases
// console.log(countVowels("hello")); // Output: 2
// console.log(countVowels("javascript")); // Output: 3
// console.log(countVowels(123)); // Output: 'Input must be a string'

// Problem 8: Check Palindrome  [Easy]
// Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
// Example:
// Input: 'racecar'  → Output: trueInput: 'hello'    → Output: false
// Hint: Compare the string to its reverse.

function isPalindrome(str) {
  if (typeof str !== "string") {
    return "Input must be a string";
  }

  let newString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString === str;
}

// Test cases
// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello")); // Output: false
// console.log(isPalindrome(123)); // Output: 'Input must be a string'

// Problem 9: Capitalize First Letter of Each Word  [Easy]
// Description: Write a function titleCase(str) that capitalizes the first letter of every word in a string.
// Example:
// Input: 'hello world'  → Output: 'Hello World'
// Hint: Use split(' '), map(), and join(' ').

function titleCase(str) {
  if (typeof str !== "string") {
    return "Input must be a string";
  }

  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Test cases
// console.log(titleCase("hello world")); // Output: 'Hello World'
// console.log(titleCase(123)); // Output: 'Input must be a string'

// Problem 10: Count Occurrences of a Character  [Easy]
// Description: Write a function countChar(str, char) that returns how many times a character appears in a string.
// Example:
// Input: 'banana', 'a'  → Output: 3
// Hint: Use split(char).length - 1 or a loop.

function countChar(str, char) {
  if (typeof str !== "string" || typeof char !== "string") {
    return "Both inputs must be strings";
  }

  // return str.split(char).length - 1;

  // Alternative approach using a loop

  let count = 0;
  for (let c of str) {
    if (c === char) {
      count++;
    }
  }
  return count;
}

// Test cases
// console.log(countChar("banana", "a")); // Output: 3
// console.log(countChar("hello world", "o")); // Output: 2
// console.log(countChar(123, "1")); // Output: 'Both inputs must be strings'
// console.log(countChar("hello", 1)); // Output: 'Both inputs must be strings'
