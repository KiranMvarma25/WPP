//                          METHOD - 3

function vowel_count(str){
    let vowels = ['a','e','i','o','u'];

    let strArr = []
    for(let i=0; i<str.length; i++)
        strArr[i] = str[i]

    let count = 0;

    let i=0;
    let j=0;

    while(i < strArr.length){
        if(strArr[i] == vowels[j]){
            count ++;
            i++;
            j=0;
        }
        else{
            j++;
            if(j == strArr.length){
                i++;
                j=0;
            }
        }
    }
    return count;

}

console.log(vowel_count("javascript"));
console.log(vowel_count("python"));








//                          METHOD - 1

// function vowel_count(str){
//     return str.replace(/[^aeiou]/g, "").length;
    
//     // return str.replace(/[!^aeiou]/g, "").length; // for consonants
// }

// console.log(vowel_count("javascript"));





//                          METHOD - 2

// function vowel_count(str){
//     let vowelArr = ['a','e','i','o','u'];

//     let strArr = [];
//     for(let i=0; i<str.length; i++)
//         strArr[i] = str[i];

//     let count = 0;

//     for(let i=0; i<strArr.length; i++){
//         for(let j=0; j<vowelArr.length; j++){
//             if(strArr[i] == vowelArr[j]){
//                 count++;
//                 break;
//             }
//         }
//     }

//     return count;
// }

// console.log(vowel_count('javascript'));




// Write a JavaScript program to count the number of vowels in a given string.

// This JavaScript program counts the number of vowels (a, e, i, o, u) in a given string. It iterates through the string, checks each character to see if it is a vowel, and keeps a running total of the vowels encountered.