// Write a JavaScript function `removeWords`  that takes a string as input and returns the remaining string after removing the first three characters.

//1) If the input is null, undefined, or the empty string, it returns "Invalid input".
//2) If the string length is three or less, it returns "String too short to remove".
//3) Do not use any **built-in string methods** such as .slice() or .substring().

// Input: "Dev Zero One"
// Output: " Zero One"

// Input: "I love programming"
// Output: "ove programming"

// Input: "Hello World"
// Output: "lo World"

// Input: "JS Rocks!"
// Output: "Rocks!"

// Input: "Yes"
// Output: "String is too short to remove"

// Input: ""
// Output: "Input is Invalid"





function removeWords(sentence){
    if(typeof sentence !== "string" || sentence.length === 0){
        return "Invalid input";
    }else if(sentence.length <= 3){
        return "String too short to remove";
    }

    let remainingString ="";

    for(let i = 3; i < sentence.length; i++){
        remainingString = remainingString + sentence[i];
    }

    return remainingString;
}

console.log(removeWords(""));


