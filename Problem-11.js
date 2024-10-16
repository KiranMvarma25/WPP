function number_order(x ,y, z){
    if(y > x && z > x)
        return "strict mode";

    else if(z > y)
        return "soft mode";

    else
        return undefined;
}

console.log(number_order(1,2,3));


// Write a JavaScript program to check whether three given numbers are increasing in strict or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

// This JavaScript program checks whether three given numbers are increasing in strict or soft mode. In strict mode, the numbers must strictly increase, like 10, 15, 31. In soft mode, the numbers can increase but may have equal adjacent values, like 24, 22, 31 or 22, 22, 31.