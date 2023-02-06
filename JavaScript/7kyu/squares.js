/*
https://www.codewars.com/kata/5546180ca783b6d2d5000062/
DESCRIPTION:
Complete the function that returns an array of length n, 
starting with the given number x and the squares of the 
previous number. If n is negative or zero, return an 
empty array/list.
Examples
    2, 5  -->  [2, 4, 16, 256, 65536]
    3, 3  -->  [3, 9, 81]
*/ 

function squares(x, n) {
    let result = []; 
    if (n == 1) { 
        return [x]; 
    }
    for (let i = 0; i < n - 1; i++) {
        if (i == 0) {
            result.push(x);
        }
        result.push(x *= x);
    }
    return result;
}
