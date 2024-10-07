//  Method - 1  

function multipleOf_3_or_7 (num) {     
    if(num % 3 ===0 || num % 7 === 0)         
        return true;     
    else         
    return false; 
}  
console.log(multipleOf_3_or_7(56)); 
console.log(multipleOf_3_or_7(5)); 
console.log(multipleOf_3_or_7(21));    




//  Method - 2  

// function multipleOf_3_or_7(nums) { 
//     return nums.filter(x => x % 3 === 0 || x % 7 ===0) // }  
// console.log(multipleOf_3_or_7([27,35,12,34,5,3,7,56]));

// Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
// This JavaScript program checks if a given positive number is a multiple of either 3 or 7. It uses the modulo operator (%) to determine if the number is divisible by 3 or 7 without any remainder. If the result is 0 for either operation, it means the number is a multiple of 3 or 7, respectively.