//**Day 5 — Functions & Scope */

//* Problem 21: Factorial (Recursive)  [Easy]
// Description: Write a recursive function factorial(n) that returns the factorial of a non-negative integer n.
// Example:
// Input: 5  → Output: 120 (5×4×3×2×1)Input: 0  → Output: 1
// Hint: Base case: factorial(0) = 1. Recursive case: n * factorial(n-1).

function factorial(n) {
  if (typeof n !== "number" || n < 0) {
    return "Input must be a non-negative integer";
  }
  //   if (n === 0) {
  //     return 1;
  //   }
  //   return n * factorial(n - 1);

  // Alternative using a loop
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

//* Test cases
// console.log(factorial(5)); // Output: 120
// console.log(factorial(0)); // Output: 1
// console.log(factorial(-1)); // Output: 'Input must be a non-negative integer'
// console.log(factorial("not a number")); // Output: 'Input must be a non-negative integer'

//* Problem 22: Fibonacci Sequence  [Easy]
// Description: Write a function fibonacci(n) that returns the nth number in the Fibonacci sequence.
// Example:
// Input: 6  → Output: 8 (0,1,1,2,3,5,8...)
// Hint: Try both iterative and recursive approaches.

function fibonacci(n) {
  if (typeof n !== "number" || n < 0) {
    return "Input must be a non-negative integer";
  }
  // Iterative approach
  let a = 0,
    b = 1,
    temp;
  if (n === 0) return a;

  for (let i = 1; i < n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return b;

  // Recursive approach
  // if (n === 0) return 0;
  // if (n === 1) return 1;
  // return fibonacci(n - 1) + fibonacci(n - 2);
}

//* Test cases
// console.log(fibonacci(6)); // Output: 8
// console.log(fibonacci(0)); // Output: 0
// console.log(fibonacci(1)); // Output: 1
// console.log(fibonacci(-1)); // Output: 'Input must be a non-negative integer'
// console.log(fibonacci("not a number")); // Output: 'Input must be a non-negative integer'

//* Problem 23: Create a Counter with Closure  [Medium]
// Description: Write a function makeCounter() that returns an object with increment, decrement, and getCount methods using closure.
// Example:
// const c = makeCounter();c.increment(); c.increment();c.getCount(); // 2
// Hint: Use a variable inside the outer function that inner functions can access.

function makeCounter() {
  let count = 0; // This variable is enclosed in the closure
  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
}

//* Test cases
// const c = makeCounter();
// c.increment();
// c.increment();
// console.log(c.getCount()); // Output: 2
// c.decrement();
// console.log(c.getCount()); // Output: 1

//* Problem 24: Curry a Function  [Medium]
// Description: Write a function curry(fn) that converts a function of two arguments into a curried version.
// Example:
// const add = curry((a,b) => a+b);add(2)(3); // 5
// Hint: Return a function from inside a function.

function curry(fn) {
  // return function (a) {
  //   return function (b) {
  //     return fn(a, b);
  //   };
  // };

  // Alternative using arrow functions
  return (a) => (b) => fn(a, b);
}

//* Test cases
// const add = curry((a, b) => a + b);
// console.log(add(2)(3)); // Output: 5
// const multiply = curry((a, b) => a * b);
// console.log(multiply(4)(5)); // Output: 20

//* Problem 25: Memoize a Function  [Medium]
// Description: Write a function memoize(fn) that caches the results of a function so repeated calls with the same input return the cached result.
// Example:
// const memoAdd = memoize(n => n + 10);memoAdd(5); // 15 (computed)memoAdd(5); // 15 (from cache)
// Hint: Use an object as a cache inside the outer function.

function memoize(fn) {
  const cache = {};
  // return function (n) {
  //   if (cache[n] !== undefined) {
  //     return cache[n]; // Return cached result
  //   }
  //   const result = fn(n); // Compute result
  //   cache[n] = result; // Cache the result
  //   return result;
  // };

  // Alternative using arrow functions
  return (n) => {
    if (cache[n] !== undefined) {
      return cache[n]; // Return cached result
    }
    const result = fn(n); // Compute result
    cache[n] = result; // Cache the result
    return result;
  };
}

//* Test cases
// const memoAdd = memoize((n) => n + 10);
// console.log(memoAdd(5)); // Output: 15 (computed)
// console.log(memoAdd(5)); // Output: 15 (from cache)
// const memoFactorial = memoize(factorial);
// console.log(memoFactorial(5)); // Output: 120 (computed)
// console.log(memoFactorial(5)); // Output: 120 (from cache)
