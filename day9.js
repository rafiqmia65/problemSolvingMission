// Write a javaScript function `countDigits`  that takes a parameter as an integer and returns  the number of digits in this parameter.

// Example 1:
// ```Input: 59863
// Output: 5```

// **Constraints**: 
// You cannot change the type of value. Like, Cannot convert an integer into string.

function countDigits(number){

    if(typeof number !== "number" || !Number.isInteger(number)) {
        return "Please enter a valid integer";
    }

    let numberAbs = Math.abs(number);

    let count = 0;

    do {
        count++;
        numberAbs = Math.floor(numberAbs / 10);
    } while (numberAbs > 0);

    return count;
}

console.log(countDigits(59863));