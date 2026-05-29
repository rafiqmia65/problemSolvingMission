// Problem 1: Remove Duplicates from Array
// Write a function removeDuplicates(arr) that returns a new array with all duplicate values removed.
// Example: removeDuplicates([1, 2, 2, 3, 4, 4, 5]) → [1, 2, 3, 4, 5]

function removeDuplicates(arr) {
  // Check if input is an array
  if (!Array.isArray(arr)) {
    return "Input must be an array.";
  }
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
// console.log(removeDuplicates("not an array")); // Output: "Input must be an array."

// Problem 2: Flatten Nested Array
// Write a function flattenArray(arr) that flattens a one-level nested array into a single array.
// Example: flattenArray([1, [2, 3], [4, 5], 6]) → [1, 2, 3, 4, 5, 6]

function flattenArray(arr) {
  // Check if input is an array
  if (!Array.isArray(arr)) {
    return "Input must be an array.";
  }
  let flattenedArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenedArray = flattenedArray.concat(arr[i]);
    } else {
      flattenedArray.push(arr[i]);
    }
  }
  return flattenedArray;
}

// console.log(flattenArray([1, [2, 3], [4, 5], 6])); // Output: [1, 2, 3, 4, 5, 6]
// console.log(flattenArray("not an array")); // Output: "Input must be an array."
