/* 
https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
DESCRIPTION:
Write a function to convert a name into initials. 
This kata strictly takes two words with one space in between them.
The output should be two capital letters with a dot separating them.
*/ 
function abbrevName(name) {  
    return name.split(' ').map(function(word) { 
        return word[0].toUpperCase()
    }).join('.')
}