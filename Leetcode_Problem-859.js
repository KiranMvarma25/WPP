// function buddyStrings(s, goal) {

//     if(s.length !== goal.length) 
//         return false;

//     let n = s.length;
//     let inputStr = [];
//     for (let i = 0; i < n; i++)
//         inputStr[i] = s[i];
    
//     let i = 0;
//     let j = n - 1;
//     while (i < j) {
//         let temp = inputStr[i];
//         inputStr[i] = inputStr[j];
//         inputStr[j] = temp;
//         i++;
//         j--;
//     }
    
//     let OGStr = inputStr.join('');
    
//     if (OGStr === goal)
//         return true;
    
//     return false;
// }

// // console.log(buddyStrings('ab', 'ba'));
// console.log(buddyStrings('aaaaaaabc', 'aaaaaaacb'));









var buddyStrings = function(s, goal) {
    
    if(s.length !== goal.length) 
        return false;
    
    
    if(s === goal){
        let seen = new Set();
        for (let char of s) {
            if (seen.has(char)) return true; 
            seen.add(char);
        }
        return false; 
    }

    let diff = [];
    for(let i = 0; i < s.length; i++){ 
        if (s[i] !== goal[i]) {
            diff.push(i);
        }
    }

    return diff.length === 2 && 
           s[diff[0]] === goal[diff[1]] && 
           s[diff[1]] === goal[diff[0]];
};
