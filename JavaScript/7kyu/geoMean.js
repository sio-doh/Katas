/*
https://www.codewars.com/kata/57c6b44f58da9ea6c20003da
DESCRIPTION:
Introduction
Take a list of n numbers a1, a2, a3, ..., aN to start 
with.
Arithmetic mean (or average) is the sum of these numbers 
divided by n.
Geometric mean (or average) is the product of these numbers 
taken to the nth root.
Example
List of numbers: 1, 3, 9, 27, 81
    n = 5
    Arithmetic mean = (1 + 3 + 9 + 27 + 81) / 5 = 121 / 5 = 24.2
    Geometric mean = (1 * 3 * 9 * 27 * 81) ^ (1/5) = 59049 ^ (1/5) = 9
Task
You will be given a list of numbers and their arithmetic 
mean. However, the list is missing one number. Using this 
information, you must figure out and return the geometric 
mean of the FULL LIST, including the number that's missing.
*/ 

function geo_mean(nums, arith_mean, length = nums.length + 1) {
    let number = arith_mean * length - nums.reduce((a, b) => a + b, 0); 
    return (nums.reduce((a, b) => a * b, 1) * number) ** (1 / length);
}