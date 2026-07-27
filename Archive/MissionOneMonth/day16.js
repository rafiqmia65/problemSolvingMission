// Write a JavaScript function `calculateAverage ` that takes an array of numbers and returns the average of the array.

// `Input: [12, 34, 56, 78, 90]
// Output: 54

// Input: [3, 6, 9, 12, 15, 18] 
// Output: 10.5`

function calculateAverage(Numbers){
    if(!Array.isArray(Numbers) || Numbers.length === 0){
        return "Invalid";
    }

    let total = 0;

    for(let num of Numbers){
        total += num;
    }

    return total / Numbers.length;
}

console.log(calculateAverage([12, 34, 56, 78, 90]))