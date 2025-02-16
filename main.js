// Write a JavaScript function countWords  that takes a string and returns the number of words contained in this string. 

function countWords(sentence){
    let sentenceSplit = sentence.split(" ")
    let count = sentenceSplit.length;

    return count;
}


const countWord = "DEV ZeroOne is a Next-Gen Programming Learning Platform."

console.log(countWords(countWord));