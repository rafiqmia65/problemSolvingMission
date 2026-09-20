//* Problem 6: Reverse a String  [Easy]
// Description: Write a function reverseString(str) that returns the reverse of a given string.
// Example:
// Input: 'hello'   → Output: 'olleh'Input: 'world'   → Output: 'dlrow'
// Hint: Use split(''), reverse(), and join('').

function reverseString(str) {
  if (typeof str !== "string") {
    return "Input must be a string";
  }

  // return str.split('').reverse().join('');

  // Alternative approach using a loop

  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// * Test cases
// console.log(reverseString("hello")); // Output: "olleh"
// console.log(reverseString("world")); // Output: "dlrow"
// console.log(reverseString(123)); // Throws Error: Input must be a string

//* Problem 7: Count Vowels in a String  [Easy]
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

// * Test cases
// console.log(countVowels("hello")); // Output: 2
// console.log(countVowels("javascript")); // Output: 3
// console.log(countVowels(123)); // Throws Error: Input must be a string

//* Problem 8: Check Palindrome  [Easy]
// Description: Write a function isPalindrome(str) that returns true if the string reads the same forwards and backwards.
// Example:
// Input: 'racecar'  → Output: trueInput: 'hello'    → Output: false
// Hint: Compare the string to its reverse.

function isPalindrome(str) {
  if (typeof str !== "string") {
    return "Input must be a string";
  }

  // const reversed = str.split("").reverse().join("");
  // return str === reversed;

  // Alternative approach using a loop

  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

// * Test cases
// console.log(isPalindrome("racecar")); // Output: true
// console.log(isPalindrome("hello")); // Output: false
// console.log(isPalindrome(12321)); // Throws Error: Input must be a string

//* Problem 9: Capitalize First Letter of Each Word  [Easy]
// Description: Write a function titleCase(str) that capitalizes the first letter of every word in a string.
// Example:
// Input: 'hello world'  → Output: 'Hello World'
// Hint: Use split(' '), map(), and join(' ').

function titleCase(str) {
  if (typeof str !== "string") {
    return "Input must be a string";
  }

  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

// * Test cases
// console.log(titleCase("hello world")); // Output: "Hello World"
// console.log(titleCase("javascript is fun")); // Output: "Javascript Is Fun"
// console.log(titleCase(123)); // Throws Error: Input must be a string
