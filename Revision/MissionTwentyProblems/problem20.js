// Write a JavaScript function called `printFibonacci `that prints the Fibonacci sequence up to the N-th number.

// `input: 5
// output: 0 1 1 2 3

// input: 8
// output: 0 1 1 2 3 5 8 13

// input: 10
// output: 0 1 1 2 3 5 8 13 21 34`

// **Explanation:**
// ||This question asks you to print the **Fibonacci sequence** up to the N-th number. Each number in the Fibonacci sequence is the **sum of the two preceding ones**, **starting with 0 and 1**.||

function printFibonacci(n) {
  if (typeof n !== "number" || n < 1) {
    return "Invalid Input";
  }

  let fibSequence = [];

  let a = 0,
    b = 1;

  for (let i = 0; i < n; i++) {
    fibSequence.push(a);
    let temp = a + b;
    a = b;
    b = temp;
  }

  return fibSequence.join(" ");
}

console.log(printFibonacci(5)); // Output: 0 1 1 2 3
console.log(printFibonacci(8)); // Output: 0 1 1 2 3 5 8 13
console.log(printFibonacci(10)); // Output: 0 1 1 2 3 5 8 13 21 34
console.log(printFibonacci("5")); // Output: Invalid Input
