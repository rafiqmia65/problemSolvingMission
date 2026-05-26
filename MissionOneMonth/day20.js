// Write a JavaScript function called `printFibonacci `that prints the Fibonacci sequence up to the N-th number.

// `input: 5
// output: 0 1 1 2 3

// input: 8
// output: 0 1 1 2 3 5 8 13

// input: 10
// output: 0 1 1 2 3 5 8 13 21 34`

// **Explanation:**
// ||This question asks you to print the **Fibonacci sequence** up to the N-th number. Each number in the Fibonacci sequence is the **sum of the two preceding ones**, **starting with 0 and 1**.||

const printFibonacci = (number) => {
  let a = 0;
  let b = 1;

  let fibonacci = [a, b];

  for (let i = 2; i < number; i++) {
    let fib = a + b;
    fibonacci.push(fib);
    a = b;
    b = fib;
  }
  return fibonacci.join(" ");
};
console.log(printFibonacci(10));
