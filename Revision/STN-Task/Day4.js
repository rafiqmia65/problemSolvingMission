//* Problem 1: Remove Duplicates from Array
// Write a function removeDuplicates(arr) that returns a new array with all duplicate values removed.
// Example: removeDuplicates([1, 2, 2, 3, 4, 4, 5]) → [1, 2, 3, 4, 5]

function removeDuplicates(arr) {
  // Check if input is an array
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  // Use Set to remove duplicates and convert back to array
  //   return [...new Set(arr)];

  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArray.includes(arr[i])) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // Output: [1, 2, 3, 4, 5]
