//* Problem 16: Count Object Properties  [Easy]
// Description: Write a function countProperties(obj) that returns the number of properties in an object.
// Example:
// Input: {a: 1, b: 2, c: 3}  → Output: 3
// Hint: Use Object.keys().length.

function countProperties(obj) {
  if (typeof obj !== "object" || obj === null) {
    return "Input must be a non-null object";
  }

  return Object.keys(obj).length;
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

  return { ...obj1, ...obj2 };

  // alternative using Object.assign

  //  return Object.assign({}, obj1, obj2);
}

// * Test cases
// console.log(mergeObjects({ a: 1 }, { b: 2 })); // Output: { a: 1, b: 2 }
// console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 })); // Output: { a: 1, b: 3, c: 4 }
// console.log(mergeObjects("not an object", { b: 2 })); // Output: 'Both inputs must be non-null objects'

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

  return result.join(",");
}

// * Test cases
// console.log(fizzBuzz(15)); // Output: 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz
// console.log(fizzBuzz(5)); // Output: 1,2,Fizz,4,Buzz
// console.log(fizzBuzz(-1)); // Output: 'Input must be a positive number'
