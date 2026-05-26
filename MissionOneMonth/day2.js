// Write a JavaScript function `countWords`  that takes a string and returns the number of words contained in this string. 

// Example:
// Input: "DEV ZeroOne is a Next-Gen Programming Learning Platform."
// Output: 8

// Constraints:
// **using built-in functions is prohibited**


function countWords(sentence){

    if(typeof sentence !== "string"){
        return "words number 0";
    }

    let sentenceSplit = sentence.split(" ");
    let count=0;
    for(let i of sentenceSplit){
        count=count+1;
    }
    return count;
}


const countWord = "DEV ZeroOne is a Next-Gen Programming Learning Platform.";

console.log(countWords(countWord));