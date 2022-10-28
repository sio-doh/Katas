/*
https://www.codewars.com/kata/5842df8ccbd22792a4000245
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. 
For example:
    expandedForm(12); // Should return '10 + 2'
    expandedForm(42); // Should return '40 + 2'
    expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/ 
function expandedForm(num) {
    let strNum = num.toString().split(""); 
    for (let i = 0; i < strNum.length; i++) {
        for (let j = strNum.length - i; j > 1; j--) {
            strNum[i] += "0";
        }
    }
    strNum = strNum.filter(val => !val.startsWith(0))
    return strNum.join(" + ");
}