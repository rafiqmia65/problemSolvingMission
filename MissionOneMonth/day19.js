// Write a JavaScript function called `findFactorial` that calculates the factorial of a given number

// `input: 5
// output: 120

// input: 3
// output: 6

// input: 7
// output: 5040`

const findFactorial = (number) => {
  if (typeof number !== "number") {
    return "Invalid Input";
  }

  let factorial = 1;

  for (let i = number; i >= 1; i--) {
    factorial = factorial * i;
  }
  return factorial;
};

console.log(findFactorial(7));
