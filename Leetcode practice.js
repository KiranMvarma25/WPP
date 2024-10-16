const words = ["are","amy","u"];
let left = 0;
let right = 2;

let count = 0;

let vowelArr = ['a','e','i','o','u'];

for (let i = left; i <= right; i++) {
    let tempWord = words[i];

    if (vowelArr.includes(tempWord[0]) && vowelArr.includes(tempWord[tempWord.length - 1])) 
        count++;
    
}

console.log(count);