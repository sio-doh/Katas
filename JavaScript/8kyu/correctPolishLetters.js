/*
https://www.codewars.com/kata/57ab2d6072292dbf7c000039
DESCRIPTION:
There are 32 letters in the Polish alphabet: 9 vowels 
and 23 consonants.
Your task is to change the letters with diacritics:
    ą -> a,
    ć -> c,
    ę -> e,
    ł -> l,
    ń -> n,
    ó -> o,
    ś -> s,
    ź -> z,
    ż -> z
and print out the string without the use of the Polish 
letters.
For example:
    "Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/ 

function correctPolishLetters(string) {
    return string.replace(/[ąćęłńóśźż]/g, replacer => "acelnoszz"["ąćęłńóśźż".indexOf(replacer)]);
}