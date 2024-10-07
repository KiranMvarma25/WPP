function front_back(string){
    
    let n = string.length;

    if(n < 3)
        return false;

    let arrString = [];

    for(let i = 0; i < n; i++)
        arrString[i] = string[i];


    let newString = [];

    for(let i = n-3; i < n; i++)
        newString.push(string[i]);

    let resultString = newString.concat(arrString);
    
    return resultString.join('');
}

console.log(front_back("vascodegama"));
console.log(front_back("anadearmas"));

// Write a JavaScript program to create a string from a given string. This is done by taking the last 3 characters and adding them at both the front and back. The string length must be 3 or more.
// This JavaScript program creates a new string from a given string by taking its last three characters and appending them both at the front and back. It first checks if the length of the given string is three or more characters to ensure the operation is valid. Then, it extracts the last three characters and concatenates them with the original string, forming the desired result.