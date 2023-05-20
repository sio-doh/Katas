// https://www.codewars.com/kata/58a6568827f9546931000027
// DESCRIPTION:
// Task
// Two integer numbers are added using the column addition 
// method. When using this method, some additions of digits 
// produce non-zero carries to the next positions. Your 
// task is to calculate the number of non-zero carries that 
// will occur while adding the given numbers.
// The numbers are added in base 10.
// Example
// For a = 543 and b = 3456, the output should be 0
// For a = 1927 and b = 6426, the output should be 2
// For a = 9999 and b = 1, the output should be 4
// Input/Output
//     [input] integer a
// A positive integer.
// Constraints: 1 ≤ a ≤ 10^7
//     [input] integer b
// A positive integer.
// Constraints: 1 ≤ b ≤ 10^7
//     [output] an integer

function numberOfCarries(a, b) { 
    // obtain number length by converting to string & obtain string length
    const lenA = `${a}`.length;
    const lenB = `${b}`.length; 
    // obtain max length
    let len = lenA > lenB ? lenA : lenB; 
    let i = 0;
    let carriedOver = 0; 
    let totalCarriedOver = 0;
    while (i < len) {
        const digitA = a % 10;
        const digitB = b % 10;
        // if there is a carried digit, increase total carried over
        if (digitA + digitB + carriedOver > 9) {
            carriedOver = 1; 
            totalCarriedOver++;
        } else {
            carriedOver = 0;
        }
        a = Math.floor(a / 10); 
        b = Math.floor(b / 10);
        i++;
    }
    return totalCarriedOver;
} 