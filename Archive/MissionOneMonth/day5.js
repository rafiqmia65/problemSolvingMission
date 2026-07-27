// Write a JS function `reverseArray` that takes an array and returns a reverse array.

// **Constraints:**
// 1. The function cannot change the main array. 
// 1. Cannot use array methods for reverse.


function reverseArray(arr){
    let rev_arr =[];

    for(let i of arr){
        rev_arr.unshift(i);
    }
    return rev_arr;
}

const numbers=[ 3, 6, 5, 4, 8];

console.log(reverseArray(numbers));

console.log(numbers)

// Another Way

// function reverse(arr){
//     let rev_arr=[];
//     for(let i=arr.length-1; i>=0; i--){
//         rev_arr.push(arr[i]);
//     }
//     return rev_arr;
// }

// console.log(reverse(numbers));
