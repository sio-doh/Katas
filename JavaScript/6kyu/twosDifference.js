// https://www.codewars.com/kata/5340298112fa30e786000688
// DESCRIPTION:
// The objective is to return all pairs of integers from 
// a given array of integers that have a difference of 
// 2.
// The result array should be sorted in ascending order 
// of values.
// Assume there are no duplicate integers in the array. 
// The order of the integers in the input array should 
// not matter.
// Examples
//     [1, 2, 3, 4]  should return [[1, 3], [2, 4]]
//     [4, 1, 2, 3]  should also return [[1, 3], [2, 4]]
//     [1, 23, 3, 4, 7] should return [[1, 3]]
//     [4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]

function twosDifference(input) {
    const final = [];
    for (let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            const num1 = input[i];
            const num2 = input[j];
        
            if (Math.abs(num1 - num2) === 2) {
                final.push([Math.min(num1, num2), Math.max(num1, num2)]);
            }
        }
    }
    return final.sort((a, b) => a[0] - b[0]);
}