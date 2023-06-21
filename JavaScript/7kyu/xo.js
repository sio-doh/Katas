// https://www.codewars.com/kata/55908aad6620c066bc00002a
// DESCRIPTION:
// Check to see if a string has the same amount of 'x's 
// and 'o's. The method must return a boolean and be case 
// insensitive. The string can contain any char.
// Examples input/output:
//     XO("ooxx") => true
//     XO("xooxx") => false
//     XO("ooxXm") => true
//     XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
//     XO("zzoo") => false

function XO(str) {
    let xCount = 0; 
    let oCount = 0;
    const xRegExp = new RegExp('x', 'i');
    const oRegExp = new RegExp('o', 'i');
    for (let i = 0; i < str.length; i++) {
        const letter = str[i]; 
        if (letter.match(xRegExp)) {
            xCount++;
        } else if (letter.match(oRegExp)) {
            oCount++;
        } 
    }
    return xCount == oCount;
}