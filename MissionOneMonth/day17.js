// Write a JavaScript function called countOccurrences that counts the number of occurrences of a substring within a given string.

// Input:
// "hello world, hello everyone"
// "hello"

// Output: 2

function countOccurrences(str, wrd){
    if(typeof str !== "string" || typeof wrd !== "string"){
        return "invalid"
    }

    const strSplit = str.split(" ");

    let wordCount = 0;

    for(let word of strSplit){
        if(word === wrd){
            wordCount+= 1;
        }
    }
    return wordCount;
}

console.log(countOccurrences("hello world, hello everyone","hello"));