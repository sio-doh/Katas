/*
https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/javascript
DESCRIPTION: 
Write a function which calculates the average of the numbers 
in a given list.
Note: Empty arrays should return 0. 
*/

function find_average(array) {
    const average = array.reduce((a, b) => a + b, 0) / array.length; 
    if (average.length > 0 || array.length == null || array.length == []) {
        return 0;
    } else {
        return average;  
    }
} 

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
