/*
https://www.codewars.com/kata/52180ce6f626d55cf8000071
DESCRIPTION: 
Please write a function that will take a string as input 
and return a hash. The string will be formatted as such. 
The key will always be a symbol and the value will 
always be an integer.
    "a=1, b=2, c=3, d=4"
This string should return a hash that looks like
    { 'a': 1, 'b': 2, 'c': 3, 'd': 4}
*/
function strToHash(str) {
    let result = {}; 
    if (str.length) {
        let content = str.split(", "); 
        content.forEach(contentItem => {
            const [k, v] = contentItem.split("="); 
            result[k] = +v;
        })
    } 
    return result;
}