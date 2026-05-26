// Write a JavaScript `countVowels`  function that takes a string as input and returns the total number of vowels (both uppercase and lowercase) in the string. 

// `Input: "Hello World"
// Output: 3`


function countVowels(str){
    if(typeof str !== "string"){
        return "Invalid sentences"
    }
    const sentences=str.toLowerCase();
    const sent= sentences.split("")
    let count = 0;

    for(let s of sent){
        if(s === "a" || s === "e" || s === "i" || s === "o" || s === "u"){
            count += 1;
        }
    }
    return count;
}

console.log(countVowels("Hello World"))