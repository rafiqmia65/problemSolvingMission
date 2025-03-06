// Write a javascript function `patternPrint` that takes an integer and make a pattern for this number.

// Example 1:
// Input: 5
// Output: 
// 5
// 55
// 555
// 5555
// 55555
// 5555
// 555
// 55
// 5


// Example 2:
// Input: 3
// Output: 
// 3
// 33
// 333
// 33
// 3


function patternPrint(number){

    let pattern = "";

    for (let i = 1; i <= number; i++) {
        pattern += String(number).repeat(i) + "\n"; 
    }
    
    for (let i = number - 1; i >= 1; i--) {
        pattern += String(number).repeat(i) + "\n"; 
    }

    return pattern;
}

console.log(patternPrint(10))


