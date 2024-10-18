function first_half(str){
    if(str.length % 2 ==0)
        return str.slice(0,str.length/2);
    return str;
}

console.log(first_half('javascript'));


function first_half(str){
    let n = str.length;
    let outputStr = '';
    for(let i=0; i<n/2; i++)
        outputStr = outputStr.concat(str[i])
    return outputStr;
}

console.log(first_half('javascript'))


function first_half(str){
    let n = str.length;

    if(n % 2 != 0 )
        return str;

    let output = [];
    for(let i=0;i<n/2;i++){
        output[i] = str[i];
    }
    return output.join('');
}

console.log(first_half('javascript'));

// Write a JavaScript program to extract the first half of a even string.

// This JavaScript program takes an input string with an even number of characters and returns a new string containing only the first half of the original string.