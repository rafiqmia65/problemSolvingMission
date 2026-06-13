//* Day 6 — ES6+ Features

//* Problem 26: Destructure and Rename  [Easy]
// Description: Given a user object, use destructuring to extract firstName, lastName, and age, renaming firstName to name.
// Example:
// const user = {firstName:'Sara', lastName:'Khan', age:25};// Extract: name='Sara', lastName='Khan', age=25
// Hint: Use: const { firstName: name, lastName, age } = user;

const user = { firstName: "Sara", lastName: "Khan", age: 25 };
const { firstName: name, lastName, age } = user;

//* Test cases
// console.log(name); // Output: 'Sara'
// console.log(lastName); // Output: 'Khan'
// console.log(age); // Output: 25

//* Problem 27: Merge Arrays with Spread  [Easy]
// Description: Write a function mergeArrays(...arrays) that accepts any number of arrays and merges them into one using the spread operator.
// Example:
// Input: [1,2], [3,4], [5]Output: [1,2,3,4,5]
// Hint: Use rest parameters and spread inside reduce or flat.

function mergeArrays(...arrays) {
  //   return arrays.reduce((merged, arr) => [...merged, ...arr], []);

  //  Alternatively, you can use flat:
  return arrays.flat();

  //   Alternatively, you can also use concat:
  //   return [].concat(...arrays);
}

//* Test cases
// console.log(mergeArrays([1, 2], [3, 4], [5])); // Output: [1, 2, 3, 4, 5]
// console.log(mergeArrays(["a", "b"], ["c"], ["d", "e"])); // Output: ['a', 'b', 'c', 'd', 'e']

