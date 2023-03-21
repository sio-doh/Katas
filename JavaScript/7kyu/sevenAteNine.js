/*
https://www.codewars.com/kata/559f44187fa851efad000087
DESCRIPTION:
Write a function that removes every lone 9 that is 
inbetween 7s.
    "79712312" --> "7712312"
    "79797"    --> "777"
*/ 

const sevenAte9 = str => str.replace(/79(?=7)/g,"7");