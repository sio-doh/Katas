/* 
https://www.codewars.com/kata/576bb71bbbcf0951d5000044
DESCRIPTION:
Given an array of integers.
Return an array, where the first element is the count of positives numbers and 
the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
Example
    For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], 
    you should return [10, -65].
*/
function countPositivesSumNegatives(input) {
    if (input && input.length) {
        let posNums = 0, negNums = 0;
        // for positive numbers it will add current number to previous number 
        // and return latest value after iterating through the whole array.
        input.forEach(num => num > 0 ? posNums++ : negNums += num);
        return [posNums, negNums];
    } else {
        return []; 
    }
}