// https://www.codewars.com/kata/58a5aeb893b79949eb0000f1
// DESCRIPTION:
// Complete the method that returns true if 2 integers 
// share at least two 1 bits, otherwise return false. 
// For simplicity assume that all numbers are 
// non-negative.
// Examples
//     7  =  0111 in binary
//     10  =  1010
//     15  =  1111
// - 7 and 10 share only a single 1-bit (at index 2) --> false
// - 7 and 15 share 3 1-bits (at indexes 1, 2, and 3) --> true
// - 10 and 15 share 2 1-bits (at indexes 0 and 2) --> true
// Hint: you can do this with just string manipulation, but 
// binary operators will make your life much easier.

function sharedBits(a, b) {
    let num1 = a.toString(2).split(""); 
    let num2 = b.toString(2).split("");
    const longest = (num1.length > num2.length) ? "num1" : "num2"; 
    if (longest == "num1") {
        while (num2.length != num1.length) {
            num2.unshift(0);
        }
    } else {
        while (num2.length != num1.length) {
            num1.unshift(0);
        }
    }
    let counter = 0;
    for (let i = 0; i < num2.length; ++i) {
        if ((num1[i] == "1") && (num2[i] == "1")) {
            counter += 1; 
        }
    }
    return (counter >= 2);
}