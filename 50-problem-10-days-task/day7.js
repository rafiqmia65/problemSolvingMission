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
