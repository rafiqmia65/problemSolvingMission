// Write a function that takes an array and returns a new array containing all the odd indexed elements from this array.
// If the new  array length is less than 3. Then add a new element “DEVZEROONE” at the last position of this new array.
// If the new  array length is greater than 3. Then add a new element “DEVZEROONE” at the first position of this new array.
// In this problem. We will consider 0 indexed  as an odd number.


// Constraints:
// Array length cannot be negative or zero.


function getNewArray(arr){

    if(arr.length <= 0){
        return "please input a value";
    }
    
    let newArr =[];
    newArr.push(arr[0]);

    for(let i=1; i<arr.length; i++){
        if(i%2!==0){
            newArr.push(arr[i]);
        }
    }
    

    if(newArr.length < 3){
        newArr.push("DEVZEROONE");
    }else if(newArr.length == 3){
        return newArr;
    }else{
        newArr.unshift("DEVZEROONE");
    }

    return newArr;
}

console.log(getNewArray([ 3, 6,4,6]));

