//* Day 9 — Algorithms & Problem Solving I

//* Problem 41: Two Sum  [Easy]
// Description: Given an array of numbers and a target, write a function twoSum(arr, target) that returns the indices of the two numbers that add up to the target.
// Example:
// Input: [2, 7, 11, 15], target = 9Output: [0, 1]  (because 2 + 7 = 9)
// Hint: Use a hash map to store visited values and their indices.

function twoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(arr[i], i);
  }
  return null;
}

// * Test Cases
// console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
// console.log(twoSum([3, 2, 4], 6)); // Output: [1, 2]
// console.log(twoSum([3, 3], 6)); // Output: [0, 1]

//* Problem 42: Check Anagram  [Easy]
// Description: Write a function isAnagram(str1, str2) that returns true if the two strings are anagrams of each other.
// Example:
// Input: 'listen', 'silent'  → Output: trueInput: 'hello', 'world'   → Output: false
// Hint: Sort both strings and compare, or use a character frequency map.

function isAnagram(str1, str2) {
  // =========================
  // Solution 1: Sorting Method
  // =========================

  // const normalize = (str) =>
  //   str
  //     .toLowerCase()
  //     .replace(/[^a-z]/g, "")
  //     .split("")
  //     .sort()
  //     .join("");

  // return normalize(str1) === normalize(str2);

  // =========================
  // Solution 2: Frequency Map Method
  // =========================

  const normalize = (str) => str.toLowerCase().replace(/[^a-z]/g, "");

  const s1 = normalize(str1);
  const s2 = normalize(str2);

  if (s1.length !== s2.length) return false;

  const freq = {};

  // Count characters from first string
  for (const char of s1) {
    freq[char] = (freq[char] || 0) + 1;
  }

  // Decrease count using second string
  for (const char of s2) {
    if (!freq[char]) return false;
    freq[char]--;
  }

  return true;
}

// * Test Cases
// console.log(isAnagram("listen", "silent")); // Output: true
// console.log(isAnagram("hello", "world")); // Output: false
// console.log(isAnagram("Dormitory", "Dirty Room")); // Output: true
// console.log(isAnagram("The eyes", "They see")); // Output: true

//* Problem 43: Find Missing Number  [Easy]
// Description: Given an array of n-1 integers from 1 to n with one number missing, write a function findMissing(arr, n) to find the missing number.
// Example:
// Input: [1,2,4,5], n=5  → Output: 3
// Hint: Use the formula: expected sum = n*(n+1)/2, then subtract actual sum.

function findMissing(arr, n) {
  // =========================
  // Solution 1: Sum Formula
  // =========================

  // const expectedSum = (n * (n + 1)) / 2;
  // const actualSum = arr.reduce((acc, num) => acc + num, 0);
  // return expectedSum - actualSum;

  // =========================
  // Solution 2: XOR Method
  // =========================

  let xor = 0;

  for (let i = 1; i <= n; i++) {
    xor ^= i;
  }

  for (const num of arr) {
    xor ^= num;
  }

  return xor;
}

// * Test Cases
// console.log(findMissing([1, 2, 4, 5], 5)); // Output: 3
// console.log(findMissing([1, 2, 3, 5], 5)); // Output: 4
// console.log(findMissing([2, 3, 4, 5], 5)); // Output: 1

//* Problem 44: Valid Parentheses  [Medium]
// Description: Write a function isValidParentheses(str) that returns true if the string has valid, balanced parentheses, brackets, and braces.
// Example:
// Input: '()[]{}'  → Output: trueInput: '([)]'    → Output: false
// Hint: Use a stack (array). Push opening brackets, pop and compare for closing ones.

function isValidParentheses(str) {
  const stack = [];
  const pairs = {
    ")": "(",
    "]": "[",
    "}": "{",
  };

  for (const char of str) {
    if (["(", "[", "{"].includes(char)) {
      stack.push(char);
    } else if (pairs[char]) {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

// * Test Cases
// console.log(isValidParentheses("()[]{}")); // Output: true
// console.log(isValidParentheses("([)]")); // Output: false
