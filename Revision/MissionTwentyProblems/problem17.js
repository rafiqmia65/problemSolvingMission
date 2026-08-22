// Write a JavaScript function called countOccurrences that counts the number of occurrences of a substring within a given string.

// Input:
// "hello world, hello everyone"
// "hello"

// Output: 2

function countOccurrences(str, wrd) {
  if (typeof str !== "string" || typeof wrd !== "string") {
    return "invalid";
  }

  let count = 0;
  let pos = 0;

  while ((pos = str.indexOf(wrd, pos)) !== -1) {
    count++;
    pos += wrd.length;
  }

  return count;
}

console.log(countOccurrences("hello world, hello everyone", "hello")); // Output: 2
