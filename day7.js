// Write a JavaScript function `multiplicationTable` that takes a number as input and prints its multiplication table up to 10.  

// **Requirements:**  
// - The function should accept a number as input. 

function multiplicationTable(number){

    if(typeof number !== "number"){
        return "Please Input Number";
    }

    let multi =[];

    for(let i=1; i <=10; i++){
        let element = i;
        multi.push(number + " * " + element + " = " + number * element);
    }
    return multi;
}

console.log(multiplicationTable(5));

// Example: Input:  `5`:
// Output: ```
// 5 x 1 = 5  
// 5 x 2 = 10  
// 5 x 3 = 15  
// 5 x 4 = 20  
// 5 x 5 = 25  
// 5 x 6 = 30  
// 5 x 7 = 35  
// 5 x 8 = 40  
// 5 x 9 = 45  
// 5 x 10 = 50  
// ``` 