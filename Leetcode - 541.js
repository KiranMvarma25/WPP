function reverseStr(s, k) {
    let letters = [];

    for(let i = 0; i < s.length; i++)
        letters[i] = s[i];  

    let i = 0;
    while(i < s.length){
        let left = i;
        let right = Math.min(i + k - 1, s.length - 1);  

        while (left < right) {
            let temp = letters[left];
            letters[left] = letters[right];
            letters[right] = temp;
            left++;
            right--;
        }

        i += 2 * k;
    }


    let result = "";
    
    for(let i = 0; i < letters.length; i++) 
        result += letters[i];  
    
    return result;
}

console.log(reverseStr("abcdefg", 2));  
console.log(reverseStr("abcd", 2));     