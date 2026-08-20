// Write a JavaScript function `multiArray` that takes two **non-empty** arrays of numbers as input and returns a new array where each element is the product of the corresponding elements from the input arrays.

// `Input: [1, 2, 3], [1, 2, 3]
// Output: [1, 4, 9]

// Input: [2, 3, 1], [4, 5, 6]
// Output: [8, 15, 6]

// Input: [], [1, 2, 3]
// Output: "Invalid"`

function multiArray(arr1, arr2) {
  if (arr1.length === 0 || arr2.length === 0 || arr1.length !== arr2.length) {
    return "Invalid";
  }
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i] * arr2[i]);
  }
  return result;
}

console.log(multiArray([2, 7], [1, 2, 3])); // Output: "Invalid"
console.log(multiArray([1, 2, 3], [1, 2, 3])); // Output: [1, 4, 9]
console.log(multiArray([2, 3, 1], [4, 5, 6])); // Output: [8, 15, 6]
