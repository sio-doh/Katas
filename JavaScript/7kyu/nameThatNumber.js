// https://www.codewars.com/kata/579ba41ce298a73aaa000255
// DESCRIPTION:
// In this kata, you'll be given an integer of range 
// 0 <= x <= 99 and have to return that number spelt out 
// in English. A few examples:
//     nameThatNumber(4)   // returns "four"
//     nameThatNumber(19)  // returns "nineteen"
//     nameThatNumber(99)  // returns "ninety nine"
// Words should be separated by only spaces and not hyphens. 
// No need to validate parameters, they will always be in 
// the range [0, 99]. Make sure that the returned String 
// has no leading of trailing spaces.

function nameThatNumber(num) {
    let ones = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"], 
        teen = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", 
                "eighteen", "nineteen"], 
        tens = [,,"twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"],
        str = String(num);
    return str.length < 2 ? ones[num] 
        : str[0] == 1 ? teen[num - 10] 
        : `${tens[str[0]]}${str[1] == 0 ? "" : " " + ones[str[1]]}`
}  