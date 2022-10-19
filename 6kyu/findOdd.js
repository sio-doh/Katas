/*
https://www.codewars.com/kata/54da5a58ea159efa38000836 
DESCRIPTION:
Given an array of integers, find the one that appears an 
odd number of times.
There will always be only one integer that appears an odd 
number of times.
Examples
    [7] should return 7, because it occurs 1 time (which is odd).
    [0] should return 0, because it occurs 1 time (which is odd).
    [1,1,2] should return 2, because it occurs 1 time (which is odd).
    [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
    [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/ 
function findOdd(A) {
    for (let i = 0; i < A.length; i++) {
      // create new A holding all values that match current iterated value
      // use length method to obtain duplicate number for certain number in A
        const count = A.filter(val => val === A[i]).length;
        if (count % 2 == 1) {
            return A[i]
        }  
    }
    // indicates no such number with odd number of duplicates in A
    return -1;
}