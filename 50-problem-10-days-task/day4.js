//* Problem 16: Count Object Properties  [Easy]
// Description: Write a function countProperties(obj) that returns the number of properties in an object.
// Example:
// Input: {a: 1, b: 2, c: 3}  → Output: 3
// Hint: Use Object.keys().length.

function countProperties(obj) {
  if (typeof obj !== "object" || obj === null) {
    return "Input must be a non-null object";
  }
  //   return Object.keys(obj).length;

  // Alternative using a loop

  let count = 0;

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      count++;
    }
  }
  return count;
}

// *  Test cases
// console.log(countProperties({ a: 1, b: 2, c: 3 })); // Output: 3
// console.log(countProperties({})); // Output: 0
// console.log(countProperties("not an object")); // Output: 'Input must be a non-null object'
// console.log(countProperties(null)); // Output: 'Input must be a non-null object'

//* Problem 17: Merge Two Objects  [Easy]
// Description: Write a function mergeObjects(obj1, obj2) that merges two objects into one. If keys conflict, the second object's values win.
// Example:
// Input: {a:1}, {b:2}  → Output: {a:1, b:2}
// Hint: Use the spread operator or Object.assign().

function mergeObjects(obj1, obj2) {
  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return "Both inputs must be non-null objects";
  }

  // Using spread operator
  //   return { ...obj1, ...obj2 };

  // Alternative using Object.assign
  //   return Object.assign({}, obj1, obj2);

  // Alternative using a loop
  const merged = {};

  for (let key in obj1) {
    merged[key] = obj1[key];
  }
  for (let key in obj2) {
    merged[key] = obj2[key];
  }
  return merged;
}

// //*  Test cases
// console.log(mergeObjects({ a: 1 }, { b: 2 })); // Output: { a: 1, b: 2 }
// console.log(mergeObjects({ a: 1 }, { a: 2 })); // Output: { a: 2 }
// console.log(mergeObjects({}, {})); // Output: {}
// console.log(mergeObjects("not an object", {})); // Output: 'Both inputs must be non-null objects'
// console.log(mergeObjects(null, {})); // Output: 'Both inputs must be non-null objects'
// console.log(mergeObjects({}, "not an object")); // Output: 'Both inputs must be non-null objects'
// console.log(mergeObjects({}, null)); // Output: 'Both inputs must be non-null objects'

//* Problem 18: FizzBuzz  [Easy]
// Description: Write a function fizzBuzz(n) that prints numbers from 1 to n. For multiples of 3 print 'Fizz', multiples of 5 print 'Buzz', multiples of both print 'FizzBuzz'.
// Example:
// Input: 15 Output: 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz
// Hint: Check divisibility with the % operator in the right order.

function fizzBuzz(n) {
  if (typeof n !== "number" || n <= 0) {
    return "Input must be a positive number";
  }
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

//*  Test cases
// console.log(fizzBuzz(15)); // Output: [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']
// console.log(fizzBuzz(0)); // Output: 'Input must be a positive number'
// console.log(fizzBuzz(-5)); // Output: 'Input must be a positive number'
// console.log(fizzBuzz("not a number")); // Output: 'Input must be a positive number'

//* Problem 19: Invert an Object  [Easy]
// Description: Write a function invertObject(obj) that swaps the keys and values of an object.
// Example:
// Input: {a: 1, b: 2}  → Output: {1: 'a', 2: 'b'}
// Hint: Use Object.entries() and reduce().

function invertObject(obj) {
  if (typeof obj !== "object" || obj === null) {
    return "Input must be a non-null object";
  }
  // Using Object.entries() and reduce()
  //   return Object.entries(obj).reduce((acc, [key, value]) => {
  //     acc[value] = key;
  //     return acc;
  //   }, {});

  // Alternative using a loop

  const inverted = {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      inverted[obj[key]] = key;
    }
  }
  return inverted;
}

//*  Test cases
// console.log(invertObject({ a: 1, b: 2 })); // Output: { '1': 'a', '2': 'b' }
// console.log(invertObject({})); // Output: {}
// console.log(invertObject("not an object")); // Output: 'Input must be a non-null object'
// console.log(invertObject(null)); // Output: 'Input must be a non-null object'

//* Problem 20: Find Duplicate Values in Array of Objects  [Medium]
// Description: Given an array of objects, write a function findDuplicateNames(arr) that returns names that appear more than once.
// Example:
// Input: [{name:'Ali'},{name:'Sara'},{name:'Ali'}]Output: ['Ali']
// Hint: Use a frequency map (object) to count occurrences.

function findDuplicateNames(arr) {
  if (!Array.isArray(arr)) {
    return "Input must be an array";
  }

  const nameCount = {};

  for (let obj of arr) {
    if (obj.name) {
      nameCount[obj.name] = (nameCount[obj.name] || 0) + 1;
    }
  }

  const duplicates = [];

  for (let name in nameCount) {
    if (nameCount[name] > 1) {
      duplicates.push(name);
    }
  }

  return duplicates;
}

//*  Test cases
// console.log(
//   findDuplicateNames([{ name: "Ali" }, { name: "Sara" }, { name: "Ali" }]),
// ); // Output: ['Ali']
// console.log(
//   findDuplicateNames([{ name: "John" }, { name: "Jane" }, { name: "Doe" }]),
// ); // Output: []
// console.log(findDuplicateNames([])); // Output: []
// console.log(findDuplicateNames("not an array")); // Output: 'Input must be an array'
