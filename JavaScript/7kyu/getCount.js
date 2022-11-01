/* 
https://www.codewars.com/kata/54ff3102c1bad923760001f3
DESCRIPTION: 
    Return the number (count) of vowels in the given string.
    We will consider a, e, i, o, u as vowels for this Kata (but not y).
    The input string will only consist of lower case letters and/or spaces.
*/ 
function getCount(str) {
    // g searches whole string, i ensures case-insensitive
    let count = str.match(/[aeiou]/gi);
    return count === null ? 0 : count.length;
}