// https://www.codewars.com/kata/57cf50a7eca2603de0000090
// DESCRIPTION:
// Move every letter in the provided string forward 10 
// letters through the alphabet.
// If it goes past 'z', start again at 'a'.
// Input will be a string with length > 0.

function moveTen(s) {
    return s.split("").map(el => el.charCodeAt() + 10 > 122
        ? String.fromCharCode(el.charCodeAt() - 16) 
        : String.fromCharCode(el.charCodeAt() + 10)).join("");
}