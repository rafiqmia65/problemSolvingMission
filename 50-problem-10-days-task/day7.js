//* Day 7 — DOM & Events (Conceptual/Logic)

//* Problem 31: Debounce Function  [Medium]
// Description: Write a debounce(fn, delay) function that delays invoking fn until after delay milliseconds have elapsed since the last time it was called.
// Example:
// const debouncedSearch = debounce(search, 300);// Fires only once after user stops typing for 300ms
// Hint: Use clearTimeout and setTimeout.

function debounce(fn, delay) {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

//* Test Cases
// function search(query) {
//   console.log(`Searching for: ${query}`);
// }

// const debouncedSearch = debounce(search, 300);
// debouncedSearch("hello");
// debouncedSearch("world");
// // Only "Searching for: world" will be logged after 300ms, as the first call is canceled by the second call.
// setTimeout(() => debouncedSearch("final"), 400);
// // "Searching for: final" will be logged after 300ms from this call, as it is not canceled by any subsequent calls.

//* Problem 32: Throttle Function  [Medium]
// Description: Write a throttle(fn, limit) function that ensures fn is called at most once every limit milliseconds.
// Example:
// const throttledScroll = throttle(onScroll, 200);// Fires at most once every 200ms during scroll
// Hint: Track the last call time with Date.now().

function throttle(fn, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

//* Test Cases
// function onScroll() {
//   console.log("Scrolled!");
// }
// const throttledScroll = throttle(onScroll, 200);
// throttledScroll(); // Logs "Scrolled!"
// throttledScroll(); // No output (called within 200ms)
// setTimeout(() => throttledScroll(), 250); // Logs "Scrolled!" after 250ms

// Problem 33: Deep Clone an Object  [Medium]
// Description: Write a function deepClone(obj) that returns a deep copy of a plain object without using JSON.parse/JSON.stringify.
// Example:
// const a = {x: {y: 1}};const b = deepClone(a);b.x.y = 99;// a.x.y is still 1
// Hint: Use recursion and check for object/array types.

function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj; // Return primitives and null as is
  }
  if (Array.isArray(obj)) {
    return obj.map(deepClone); // Recursively clone array elements
  }
  const clonedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]); // Recursively clone object properties
    }
  }
  return clonedObj;
}

//* Test Cases
// const a = { x: { y: 1 }, arr: [1, 2, 3] };
// const b = deepClone(a);
// b.x.y = 99;
// b.arr.push(4);
// console.log(a.x.y); // 1 (original object is unaffected)
// console.log(a.arr); // [1, 2, 3] (original array is unaffected)
