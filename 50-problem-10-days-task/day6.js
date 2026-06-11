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
