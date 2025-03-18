// : Write a JavaScript function called `replaceAllOccurrences` that replaces all occurrences of a character in a given string with a new character.

// `Input
// replaceAllOccurrences("hello world", "o", "0");

// Output: "hell0 w0rld"`

// **Explanation:**
// ||In the string `"hello world"`, all occurrences of the character `"o"` are replaced with `"0"`, resulting in` "hell0 w0rld"`.||

function replaceAllOccurrences(str, oldChar, newChar) {
  if (
    typeof str !== "string" ||
    typeof oldChar !== "string" ||
    typeof newChar !== "string"
  ) {
    return "Invalid Input";
  }

  const strSplit = str.split("");

  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i] === oldChar) {
      strSplit[i] = newChar;  
    }
  }

  return strSplit.join("");
}

console.log(replaceAllOccurrences("hello world", "o", "0"));
