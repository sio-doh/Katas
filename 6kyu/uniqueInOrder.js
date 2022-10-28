/*
https://www.codewars.com/kata/54e6533c92449cc251001667
Implement the function unique_in_order which takes as argument a sequence 
and returns a list of items without any elements with the same value 
next to each other and preserving the original order of elements.
For example:
    uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
    uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
    uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/
var uniqueInOrder=function(iterable) {
    // convert string to array (not all inputs will be strings).
    // check if input is an array. If it is, directly assign input to strArr. 
    // If not and it's a string, convert string to array & assign array to strArr.
    let strArr =  Array.isArray(iterable) ? iterable : iterable.split(''); 
    // filter out any elements with same value next to each other
    let unique = strArr.filter((letter, i) => {
        return strArr[i] != strArr[i + 1];
    })
    return unique;  // return array
}