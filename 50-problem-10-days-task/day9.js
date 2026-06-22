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
