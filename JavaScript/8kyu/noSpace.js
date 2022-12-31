/*
https://www.codewars.com/kata/57eae20f5500ad98e50002c5/javascript
DESCRIPTION: 
Simple, remove the spaces from the string, then return the resultant string.
*/

function noSpace(x) {
    return x.split('').filter(el => el.trim().length).join('')
}