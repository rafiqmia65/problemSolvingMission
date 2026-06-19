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

//* Problem 38: Implement Promise.all from Scratch  [Hard]
// Description: Write a function myPromiseAll(promises) that behaves like Promise.all — resolves with an array of results when all resolve, rejects immediately if any rejects.
// Example:
// myPromiseAll([p1, p2, p3]).then(results => console.log(results));
// Hint: Track resolved count and results array; reject on first failure.

function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    // Handle empty array
    if (promises.length === 0) {
      resolve([]);
      return;
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}

// * Test Cases 1
// const p1 = Promise.resolve("React");
// const p2 = Promise.resolve("Node");
// const p3 = Promise.resolve("MongoDB");

// myPromiseAll([p1, p2, p3])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Output: ["React", "Node", "MongoDB"]

// * Test Cases 2
// const p4 = Promise.reject("Error in p4");
// const p5 = Promise.resolve("Express");

// myPromiseAll([p4, p5])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Output: "Error in p4"

//* Test Cases 3 - Empty Array
// myPromiseAll([])
//   .then((results) => {
//     console.log(results);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Output: []

//* Problem 39: Flatten Object (Deep)  [Medium]
// Description: Write a function flattenObject(obj) that takes a deeply nested object and returns a flat object with dot-notation keys.
// Example:
// Input: {a: {b: {c: 1}}}Output: {'a.b.c': 1}
// Hint: Use recursion; build the key by joining parent keys with dots.

function flattenObject(obj, parentKey = "", result = {}) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const newKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        flattenObject(obj[key], newKey, result); // Recurse for nested objects
      } else {
        result[newKey] = obj[key]; // Assign value to the result object
      }
    }
  }
  return result;
}

//* Test Cases
// console.log(flattenObject({ a: { b: { c: 1 } } })); // { 'a.b.c': 1 }
// console.log(flattenObject({ x: 1, y: { z: 2 } })); // { x: 1, 'y.z': 2 }
// console.log(flattenObject({})); // {}
