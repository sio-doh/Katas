/* 
https://www.codewars.com/kata/5727bb0fe81185ae62000ae3 
DESCRIPTION:
Assume "#" is like a backspace in string. 
This means that string "a#bc#d" actually is "bd"

Your task is to process a string with "#" symbols.

Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/ 
function cleanString(s) {
    const res = [] 
    for (const clean of s) {
        if (clean === '#') {
            res.pop()
        } else {
            res.push(clean)
        }
    }
    return res.join("")
}