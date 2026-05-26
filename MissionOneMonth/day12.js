// Write a JavaScript function `isPrime ` that takes a number as input and checks whether the number is a prime number. 

// `Input : 137
// Output: true

// Input : 5 
// Output: true

// Input : 6
// Output: false

// Input : 237
// Output: false`

isPrime = (number) => {
    if(typeof number !== "number" || number < 2){
        return "Invalid Input";
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true; 
}

console.log(isPrime(26));