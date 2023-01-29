/*
https://www.codewars.com/kata/57a5b0dfcf1fa526bb000118
DESCRIPTION:
Define a function that removes duplicates from an array 
of numbers and returns it as a result.
The order of the sequence has to stay the same.
*/ 

function distinct(a) {
    return [...new Set(a)];
}