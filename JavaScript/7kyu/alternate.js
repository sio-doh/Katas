/*
https://www.codewars.com/kata/62a611067274990047f431a8
DESCRIPTION:
Given an integer n and two other values, build an 
array of size n filled with these two values 
alternating.
Examples
    5, true, false     -->  [true, false, true, false, true]
    10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
    0, "one", "two"    -->  []
*/ 

function alternate(n, firstValue, secondValue) {
    let result = []; 
    for (let idx = 0; idx < n; idx++) {
        if (!(idx % 2)) {
            result.push(firstValue);
        } else {
            result.push(secondValue);
        }
    }
    return result;
}