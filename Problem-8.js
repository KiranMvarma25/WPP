//                          METHOD - 1

function startswithJava(string){
    let n = string.length;

    let arrStr = [];
    for(let i=0;i<n;i++)
        arrStr[i] = string[i];

    let stdArr = ['j','a','v','a'];

    for(let i=0; i<stdArr.length;i++){
        if(stdArr[i] !== arrStr[i])
            return false;
    }
    return true;
}

console.log(startswithJava("javaTelusko"));





//                          METHOD - 2


function start_spec_str(str) {

    if (str.length < 4) 
      return false;
    
    // Extract the first four characters of str
    front = str.substring(0, 4);
    
    if (front == 'Java') 
      return true;
     
    else 
      return false;
  }
  
console.log(start_spec_str("JavaScript"));
console.log(start_spec_str("Java"));
console.log(start_spec_str("Python")); 