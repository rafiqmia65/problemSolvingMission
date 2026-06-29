// * Day 10 — Algorithms & Problem Solving II

// * Problem 46: Count Words in a Sentence  [Easy]
// Description: Write a function wordCount(sentence) that returns an object with each word as a key and its frequency as the value.
// Example:
// Input: 'the cat sat on the mat'Output: {the: 2, cat: 1, sat: 1, on: 1, mat: 1}
// Hint: Split by spaces, then reduce into a frequency object.

function wordCount(sentence) {
  const words = sentence.toLowerCase().split(/\s+/);

  return words.reduce((count, word) => {
    count[word] = (count[word] || 0) + 1;
    return count;
  }, {});

  //   Alternative solution using a for loop
  //   const count = {};
  //   const words = sentence.toLowerCase().split(/\s+/);
  //   for (const word of words) {
  //     count[word] = (count[word] || 0) + 1;
  //   }

  //   return count;
}

// * Test Cases
// console.log(wordCount("the cat sat on the mat")); // Output: { the: 2, cat: 1, sat: 1, on: 1, mat: 1 }
// console.log(wordCount("Hello hello world")); // Output: { hello: 2, world: 1 }

// * Problem 47: Longest Word in a Sentence  [Easy]
// Description: Write a function longestWord(sentence) that returns the longest word in a sentence. If there's a tie, return the first one.
// Example:
// Input: 'The quick brown fox'Output: 'quick'
// Hint: Split the sentence and use reduce() to track the longest.

function longestWord(sentence) {
  const words = sentence.split(/\s+/);

  return words.reduce((longest, word) => {
    return word.length > longest.length ? word : longest;
  }, "");
}

// * Test Cases
// console.log(longestWord("The quick brown fox")); // Output: 'quick'
// console.log(
//   longestWord("A journey of a thousand miles begins with a single step"),
// ); // Output: 'thousand'

// * Problem 48: Rotate an Array [Medium]
// Description: Write a function rotateArray(arr, k) that rotates an array to the right by k steps.
// Example:
// Input: [1,2,3,4,5], k = 2
// Output: [4,5,1,2,3]

// ======================================
// Solution 1: Using slice() and concat()
// Time Complexity: O(n)
// Space Complexity: O(n)
// ======================================

function rotateArray(arr, k) {
  const n = arr.length;

  if (n === 0) return [];

  // Handle cases where k is greater than array length
  k = k % n;

  return arr.slice(-k).concat(arr.slice(0, -k));
}

// * Test Cases
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
// console.log(rotateArray([1, 2, 3, 4, 5], 7)); // [4, 5, 1, 2, 3]
// console.log(rotateArray([10, 20, 30, 40], 1)); // [40, 10, 20, 30]
// console.log(rotateArray([1], 5)); // [1]
// console.log(rotateArray([], 3)); // []

// ======================================
// Solution 2: Using Reverse Algorithm
// Time Complexity: O(n)
// Space Complexity: O(1)
// ======================================

function rotateArray(arr, k) {
  const n = arr.length;

  if (n === 0) return [];

  // Handle cases where k is greater than array length
  k = k % n;

  // Helper function to reverse part of the array
  function reverse(array, start, end) {
    while (start < end) {
      [array[start], array[end]] = [array[end], array[start]];
      start++;
      end--;
    }
  }

  // Step 1: Reverse the entire array
  reverse(arr, 0, n - 1);

  // Step 2: Reverse the first k elements
  reverse(arr, 0, k - 1);

  // Step 3: Reverse the remaining elements
  reverse(arr, k, n - 1);

  return arr;
}

// * Test Cases
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
// console.log(rotateArray([1, 2, 3, 4, 5], 7)); // [4, 5, 1, 2, 3]
// console.log(rotateArray([10, 20, 30, 40], 1)); // [40, 10, 20, 30]
// console.log(rotateArray([1], 5)); // [1]
// console.log(rotateArray([], 3)); // []

// * Problem 49: Roman to Integer  [Medium]
// Description: Write a function romanToInt(s) that converts a Roman numeral string to an integer.
// Example:
// Input: 'III'   → Output: 3Input: 'IX'    → Output: 9Input: 'LVIII' → Output: 58
// Hint: Map each symbol to its value; if a smaller value comes before a larger one, subtract it.

function romanToInt(s) {
  const romanMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let prevValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanMap[s[i]];
    if (currentValue >= prevValue) {
      total += currentValue;
    } else {
      total -= currentValue;
    }
    prevValue = currentValue;
  }

  return total;
}

// * Test Cases
// console.log(romanToInt("III")); // Output: 3
// console.log(romanToInt("IV")); // Output: 4
// console.log(romanToInt("IX")); // Output: 9
// console.log(romanToInt("LVIII")); // Output: 58
// console.log(romanToInt("MCMXCIV")); // Output: 1994
