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