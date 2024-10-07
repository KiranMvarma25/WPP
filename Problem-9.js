function nearest100(x, y){
    
    if(x !== y){
        let x1 = Math.abs(x - 100);
        let y1 = Math.abs(y - 100);

        if(x1 < y1)
            return x;

        if(y1 < x1)
            return y;

        return 0;
    }

    else
        return false;
}

console.log(nearest100(90,89), "is nearest t0 100");
console.log(nearest100(-90,-89), "is nearest t0 100");
console.log(nearest100(90,90), "is nearest t0 100");

// Write a JavaScript program to find the closest value to 100 from two numerical values.
// This JavaScript program compares two numerical values and determines which one is closest to 100. It calculates the absolute difference between each value and 100, then returns the value with the smaller difference.