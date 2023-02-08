/*
https://www.codewars.com/kata/56b5dd1702a30326ce000b02
DESCRIPTION:
Your task is to rotate a matrix 90 degree to the left. 
The matrix is an array of integers with dimension n,m. 
So this kata checks some basics, it's not too 
difficult.
There's nothing more to explain, no tricks, no "bad 
cases";-). Perhaps you take a look at the testcases
...
One easy example:
    Input: {{-1, 4, 5},
            { 2, 3, 4}}
    Output: {{ 5, 4},
            { 4, 3},
            {-1, 2}}
First there are some static tests, later on random 
tests too...
*/ 

var rotateMatrix = arr => {
    let result = [], 
        innerArray = arr[0]; 
    for (let innerIdx = innerArray.length - 1; innerIdx >= 0; innerIdx--) {
        let newInnerArray = [];
        for (let idx = 0; idx < arr.length; idx++) {
            newInnerArray.push(arr[idx][innerIdx]);
        }
        result.push(newInnerArray);
    }
    return result;
}