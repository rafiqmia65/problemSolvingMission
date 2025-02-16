// Write a JavaScript function countWords  that takes a string and returns the number of words contained in this string. 

function countWords(sentence){
    let sentenceSplit = sentence.split(" ");
    let count=0;
    for(let i of sentenceSplit){
        count=count+1;
    }
    return count;
}


const countWord = "DEV ZeroOne is a Next-Gen Programming Learning Platform.";

console.log(countWords(countWord));