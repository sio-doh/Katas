/*
https://www.codewars.com/kata/5ba38ba180824a86850000f7
DESCRIPTION: 
Example:
For input: [3, 4, 4, 3, 6, 3]
    remove the 3 at index 0
    remove the 4 at index 1
    remove the 3 at index 3
Expected output: [4, 6, 3]
*/
function solve(arr) { 
    return [...new Set(arr.reverse())].reverse(); 
}