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
