// Write a JavaScript function filterIntegers  that takes an array that contains string and integer elements, and returns a new array with only integer elements.

// Example 1:

// Output: [ 3, 6,  4,  8]`

// Constraints:
// Array length cannot be zero or negative.


function filterIntegers( arr ){

    if(arr.length <= 0){
        return "Invalid Item";
    }

    let filterInteger =[];

    for(let i of arr){
        if(typeof i === "number"){
            filterInteger.push(i);
        }
    }
    return filterInteger;
}

console.log(filterIntegers([ 3, 6, "hello", 4, "3", 8]));