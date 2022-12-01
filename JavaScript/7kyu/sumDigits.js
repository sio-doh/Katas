/* 
https://www.codewars.com/kata/52f3149496de55aded000410
Write a function named sumDigits which takes a number as input 
and returns the sum of the absolute value of each of the 
number's decimal digits.
For example: (Input --> Output)
    10 --> 1
    99 --> 18
    -32 --> 5
Let's assume that all numbers in the input will be integer 
values.
*/ 

function sumDigits(number) { 
    let numberString = Math.abs((number)).toString(); 
    let sum = 0;
    for (i = 0; i < numberString.length; i++) {
        sum += parseInt(numberString[i]);
    }
    return sum;
}
