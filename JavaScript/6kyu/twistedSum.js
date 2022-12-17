/*
https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f
DESCRIPTION: 
Find the sum of the digits of all the numbers 
from 1 to N (both ends included).
Examples
    # N = 4
    1 + 2 + 3 + 4 = 10

    # N = 10
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46

    # N = 12
    1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51
*/
function twistedSum(n) { 
    let sum = 0; 
    for (let i = 1; i <= n; i++) {
        if (i.toString().length > 1) {
            i.toString().split("").forEach(index => { sum += parseInt(index) });
        } else {
            sum += i;
        }
    } 
    return sum;
}