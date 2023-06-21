// https://www.codewars.com/kata/5932c94f6aa4d1d786000028
// DESCRIPTION:
// In mathematics, an nth root of a number x, where n is 
// usually assumed to be a positive integer, is a number 
// r which, when raised to the power n, yields x:
//     r^n=x,
// Given number n, such that n > 1, find if its 2nd root, 
// 4th root and 8th root are all integers (fractional 
// part is 0), return true if it exists, false if not.
//     // 2nd root of 256 is 16
//     // 4th root of 256 is 4
//     // 8th root of 256 is 2
//     perfectRoots(256) // returns true 

function perfectRoots(n) { 
    // 2nd root (power 0.5) 
    // 4th root (power 0.25)
    // 8th root (power 0.125)
    return (n**0.5 % 1 == 0) && (n**0.25 % 1 == 0) && (n**0.125 % 1 == 0);
}