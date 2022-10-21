/*
https://www.codewars.com/kata/57eaeb9578748ff92a000009
Given an array of integers as strings and numbers, 
return the sum of the array values as if all were numbers.
Return your answer as a number.
*/
function sumMix(x) {
    // converting string to numeric type with +a
    // implemented by reduce() where 0 represents initial value passed to function
    // if parameter passed, default value of sum is this parameter
    // if not passed, sum takes first array item by default 
    return x.reduce((sum, a) => sum + +a, 0);
}