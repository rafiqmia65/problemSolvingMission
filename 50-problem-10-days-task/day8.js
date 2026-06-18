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

//* Problem 37: Retry a Promise  [Medium]
// Description: Write a function retry(fn, times) that calls an async function fn up to times times, retrying if it throws an error. Resolves on first success, rejects after all attempts fail.
// Example:
// await retry(unstableFetch, 3);// Tries up to 3 times before failing
// Hint: Use a loop with try/catch; only throw after all retries are exhausted.

async function retry(fn, times) {
  for (let attempt = 1; attempt <= times; attempt++) {
    try {
      return await fn(); // Try to execute the function
    } catch (error) {
      if (attempt === times) {
        throw error; // Throw error if it's the last attempt
      }
      // Optionally, you can add a delay here before retrying
    }
  }
}

//* Test Cases
// Example usage with an unstable function
// let attempt = 0;
// async function unstableFetch() {
//   attempt++;
//   if (attempt < 3) {
//     throw new Error("Failed attempt " + attempt);
//   }
//   return "Success on attempt " + attempt;
// }

// // Test
// (async () => {
//   try {
//     const result = await retry(unstableFetch, 3);
//     console.log(result);
//   } catch (error) {
//     console.error("Final Error:", error.message);
//   }
// })();
