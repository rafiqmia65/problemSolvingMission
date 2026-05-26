// Write a function `findIndex` that takes an array of strings and a string as arguments. and return the index number of this string.
// If cannot find the string return -1.

// Example 1:
// `Input: [ “hello”, “blue”, ”green” ] , "blue"`
// Output: 1

// Example 2:
// `Input: [ “hello”, “blue”, ”green” ] , “red”`
// Output: -1


// Constraints:
// **Array length cannot be zero or negative.**


function findIndex(arr , str){
    if(arr.length <= 0){
        return "Please Enter Valid Value";
    }

    if(arr.includes(str)){
        return 1;
    }else{
        return -1;
    }
}

console.log(findIndex([ "hello", "blue", "green" ] , "red"));
