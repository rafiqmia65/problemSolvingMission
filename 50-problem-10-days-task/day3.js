//* Problem 11: Find the Sum of an Array  [Easy]
// Description: Write a function sumArray(arr) that returns the sum of all numbers in an array.
// Example:
// Input: [1, 2, 3, 4, 5]  → Output: 15
// Hint: Use reduce() or a for loop.

function sumArray(arr) {
  if (!Array.isArray(arr)) {
    return "Input must be an array";
  }
  //   return arr.reduce((sum, num) => sum + num, 0);

  // alternative using a for loop
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }
  return sum;
}

//*  Test cases
// console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
// console.log(sumArray([])); // Output: 0
// console.log(sumArray("not an array")); // Output: 'Input must be an array'

//* Problem 12: Find Maximum Value in Array  [Easy]
// Description: Write a function findMax(arr) that returns the largest number in an array without using Math.max().
// Example:
// Input: [3, 1, 7, 2, 9]  → Output: 9
// Hint: Loop through and track the largest value found.

function findMax(arr) {
  if (!Array.isArray(arr)) {
    return "Input must be an array";
  }

  if (arr.length === 0) {
    return "Array cannot be empty";
  }

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

//*  Test cases
// console.log(findMax([3, 1, 7, 2, 9])); // Output: 9
// console.log(findMax([])); // Output: 'Array cannot be empty'
// console.log(findMax("not an array")); // Output: 'Input must be an array'

//* Problem 13: Remove Duplicates from Array  [Easy]
// Description: Write a function removeDuplicates(arr) that returns a new array with duplicate values removed.
// Example:
// Input: [1, 2, 2, 3, 3, 4]  → Output: [1, 2, 3, 4]
// Hint: Use Set or filter() with indexOf().

function removeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    return "Input must be an array";
  }
  // Using Set
  //   return [...new Set(arr)];

  // Alternative using filter and indexOf
  //   return arr.filter((item, index) => arr.indexOf(item) === index);

  // Alternative using a loop
  const unique = [];
  for (let item of arr) {
    if (!unique.includes(item)) {
      unique.push(item);
    }
  }
  return unique;
}

//*  Test cases
// console.log(removeDuplicates([1, 2, 2, 3, 3, 4])); // Output: [1, 2, 3, 4]
// console.log(removeDuplicates([])); // Output: []
// console.log(removeDuplicates("not an array")); // Output: 'Input must be an array'

//* Problem 14: Flatten a Nested Array  [Medium]
// Description: Write a function flattenArray(arr) that flattens one level of a nested array.
// Example:
// Input: [1, [2, 3], [4, 5]]  → Output: [1, 2, 3, 4, 5]
// Hint: Use flat() or reduce() with concat().

function flattenArray(arr) {
  if (!Array.isArray(arr)) {
    return "Input must be an array";
  }
  // return arr.flat();

  // alternative using reduce and concat
  //   return arr.reduce((acc, val) => acc.concat(val), []);

  // Alternative using a loop
  const flattened = [];
  for (let item of arr) {
    if (Array.isArray(item)) {
      flattened.push(...item);
    } else {
      flattened.push(item);
    }
  }
  return flattened;
}

//* Test cases
// console.log(flattenArray([1, [2, 3], [4, 5]])); // Output: [1, 2, 3, 4, 5]
// console.log(flattenArray([])); // Output: []
// console.log(flattenArray("not an array")); // Output: 'Input must be an array'

//* Problem 15: Chunk an Array  [Medium]
// Description: Write a function chunkArray(arr, size) that splits an array into chunks of a given size.
// Example:
// Input: [1,2,3,4,5], 2  → Output: [[1,2],[3,4],[5]]
// Hint: Use a while loop with slice().

function chunkArray(arr, size) {
  if (!Array.isArray(arr)) {
    return "Input must be an array";
  }
  if (size <= 0) {
    return "Size must be a positive number";
  }

  const chunks = [];
  let i = 0;
  while (i < arr.length) {
    chunks.push(arr.slice(i, i + size));
    i += size;
  }
  return chunks;
}

//*  Test cases
// console.log(chunkArray([1, 2, 3, 4, 5], 2)); // Output: [[1,2],[3,4],[5]]
// console.log(chunkArray([], 2)); // Output: []
// console.log(chunkArray("not an array", 2)); // Output: 'Input must be an array'
// console.log(chunkArray([1, 2, 3, 4, 5], 0)); // Output: 'Size must be a positive number'
