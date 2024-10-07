function first3charwithLowerCase(string){
    let n = string.length;

    if(n < 3)
        return string.toUpperCase();

    let front = string.substring(0,3).toLowerCase();
    let back = string.substring(3,n);

    return front + back;
}

console.log(first3charwithLowerCase("JAVASCRIPT"));
console.log(first3charwithLowerCase("jA"));


// Write a JavaScript program to produce a new string that has the first 3 characters in lower case from a given string. If the string length is less than 3 convert all the characters to upper case.
// The program converts the first three characters of a given string to lowercase if the string length is 3 or more. If the string length is less than 3, it converts the entire string to uppercase.