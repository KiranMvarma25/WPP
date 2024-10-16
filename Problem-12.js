function reverse_string(str){
    let strArr = [];
    for(let i=0; i<str.length; i++)
        strArr[i] = str[i];

    let i=0;
    let j=strArr.length-1;

    while(i<j){
        let temp = strArr[i];
        strArr[i] = strArr[j];
        strArr[j] = temp; 
        i++;
        j--;   
    }

    return strArr.join('');
}

console.log(reverse_string("welcome"));




//                          METHOD - 2

// function reverse_string(str){
//     return str.split('').reverse().join('');
// }

// console.log(reverse_string("javascript"));

// Write a JavaScript program to reverse a given string.

// This JavaScript program reverses a given string. It iterates through the characters of the string from the last to the first and constructs a new string by appending each character in reverse order. Finally, it returns the reversed string.