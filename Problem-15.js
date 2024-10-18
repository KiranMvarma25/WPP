function sum_array(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++)
        sum += arr[i];
    return sum;
}

console.log(sum_array([1,2,3]));



// function sum_array(arr){
//     let output = arr.reduce((acc,curr) => {
//         acc = acc + curr;
//         return acc;
//     },0)
//     return output;
// }

// console.log(sum_array([1,2,3]));