// https://www.codewars.com/kata/5a1a9e5032b8b98477000004
// DESCRIPTION:
// Given a sequence of integers, return the sum of all 
// the integers that have an even index (odd index in 
// COBOL), multiplied by the integer at the last 
// index.
// Indices in sequence start from 0.
// If the sequence is empty, you should return 0.

function evenLast(numbers) { 
    let evenSum = 0; 
    if (numbers.length === 0) return 0;
    numbers.filter((val, idx) => {
        if (idx % 2 === 0) evenSum += val;
    })
    return evenSum * numbers[numbers.length - 1];
}