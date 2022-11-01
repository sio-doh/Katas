/* 
https://www.codewars.com/kata/57a0e5c372292dd76d000d7e 
DESCRIPTION:
Write a function that accepts an integer n and a string s as parameters, 
and returns a string of s repeated exactly n times.
*/ 
function repeatStr (n, s) {
    return s.repeat(n);
}

repeatStr(6, "I"); 
repeatStr(5, "Hello");