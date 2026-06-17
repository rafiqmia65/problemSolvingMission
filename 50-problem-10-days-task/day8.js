//* Day 8 — Error Handling & Advanced Patterns

//* Problem 36: Safe JSON Parse  [Easy]
// Description: Write a function safeJsonParse(str) that tries to parse a JSON string and returns the parsed value, or null if parsing fails — without throwing an error.
// Example:
// safeJsonParse('{"a":1}');  // {a: 1}safeJsonParse('bad json'); // null
// Hint: Use try/catch inside the function.

function safeJsonParse(str) {
  try {
    return JSON.parse(str);
  } catch (e) {
    return null; // Return null if parsing fails
  }
}

// Alternative implementation using a more functional approach

// function safeJsonParse(str) {
//   return (() => {
//     try {
//       return JSON.parse(str);
//     } catch (e) {
//       return null;
//     }
//   })();
// }

//* Test Cases
// console.log(safeJsonParse('{"a":1}')); // { a: 1 }
// console.log(safeJsonParse("bad json")); // null
