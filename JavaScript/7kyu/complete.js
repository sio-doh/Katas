/*
https://www.codewars.com/kata/63967eb85e54bd00237d2201
DESCRIPTION:
Task: concatenate one or more letters to the end of a 
given input string to create a string that reads the 
same forward as backward.
Specifications
    Letters can only be added to the right hand side of 
        the input string.
    You are required to add at least one letter to the 
        input string.
    The shorter return string is the correct one. ie.. 
        (ab)=> abba is Wrong, while (ab)=> aba is 
        Right.
    Inputs will consist of one or more letters, upper 
        and lower case.
    Strings are case sensitive. ie..(Gn)=> gng is Wrong, 
        while (Gn)=> GnG is right.
Examples:
    (a) => a + a => aa
    (GG) => GG + G => GGG
    (Ab) => Ab + A => AbA
    (aba) => aba + ba => ababa
    (aab) => aab + aa => aabaa
*/

const complete = str => {
    for (let i = 1; i <= str.length; i++) { 
        if (str.slice(i) == [...str.slice(i)].reverse().join("")) {
            return str + [...str.slice(0, i)].reverse().join("");  
        }
    }
} 