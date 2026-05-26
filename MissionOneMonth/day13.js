// Write a JavaScript function called `removeDuplicate` that takes an array as input and removes all duplicate elements while keeping the order of the first occurrences. The function should return a new array containing only unique elements.

// `Example : 
// Input : [1, 3, 3, 3, 1, 5, 6, 7, 8, 1]
// Output: [1, 3, 5, 6, 7, 8]`


function removeDuplicate(numbers){
 
    let newArray = [];

    for(let number of numbers){
        if(!newArray.includes(number)){
            newArray.push(number);
        }
    }
    return newArray;
}

console.log(removeDuplicate([1, 3, 3, 3, 1, 5, 6, 7, 8, 1]));



