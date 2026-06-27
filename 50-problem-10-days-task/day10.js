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
