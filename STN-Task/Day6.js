// Problem 1: Find Missing Number
// Write a function findMissing(arr) that finds the missing number in an array of integers from 1 to n.
// Example: findMissing([1, 2, 4, 5, 6]) → 3

function findMissing(arr) {
  // Check if input is an array
  if (!Array.isArray(arr)) {
    return "Input must be an array.";
  }

  let n = arr.length + 1;
  let totalSum = (n * (n + 1)) / 2;

  let arrSum = 0;

  for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
  }

  return totalSum - arrSum;
}

// console.log(findMissing([1, 2, 4, 5, 6])); // Output: 3
// console.log(findMissing("not an array")); // Output: "Input must be an array."

// Problem 2: Group By Property
// Write a function groupBy(arr, key) that groups an array of objects by a given property.
// Example: groupBy([{type:"fruit", name:"apple"}, {type:"veggie", name:"carrot"}, {type:"fruit", name:"mango"}], "type") → { fruit: [...], veggie: [...] }

function groupBy(arr, key) {
  // Check if input is an array
  if (!Array.isArray(arr)) {
    return "Input must be an array.";
  }
  let grouped = {};
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (item[key]) {
      if (!grouped[item[key]]) {
        grouped[item[key]] = [];
      }
      grouped[item[key]].push(item);
    }
  }
  return grouped;
}

// console.log(groupBy([{type:"fruit", name:"apple"}, {type:"veggie", name:"carrot"}, {type:"fruit", name:"mango"}], "type"));
// // Output: { fruit: [{type:"fruit", name:"apple"}, {type:"fruit", name:"mango"}], veggie: [{type:"veggie", name:"carrot"}] }
// console.log(groupBy("not an array", "type")); // Output: "Input must be an array."
