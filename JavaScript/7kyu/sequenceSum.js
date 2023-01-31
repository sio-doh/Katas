/*
https://www.codewars.com/kata/586f6741c66d18c22800010a
DESCRIPTION:
Your task is to make function, which returns the sum 
of a sequence of integers.
The sequence is defined by 3 non-negative values: begin, 
end, step (inclusive).
If begin value is greater than the end, function should 
returns 0
Examples
    2,2,2 --> 2
    2,6,2 --> 12 (2 + 4 + 6)
    1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
    1,5,3  --> 5 (1 + 4)
*/ 

const sequenceSum = (begin, end, step) => {
    let result = 0; 
    for (let i = begin; i <= end; i += step) {
        result += i;
    } 
    return result;
};