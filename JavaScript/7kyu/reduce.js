// https://www.codewars.com/kata/576400f2f716ca816d001614
// DESCRIPTION:
// Write a function which reduces fractions to their simplest 
// form! Fractions will be presented as an array/tuple 
// (depending on the language) of strictly positive integers, 
// and the reduced fraction must be returned as an array/tuple:
//     input:   [numerator, denominator]
//     output:  [reduced numerator, reduced denominator]
//     example: [45, 120] --> [3, 8]
// All numerators and denominators will be positive integers.
// Note: This is an introductory Kata for a series... coming 
// soon!

function reduce(fraction) {
    let [numerator, denominator] = fraction; 
    for (let i = Math.min(...fraction); i > 0; i--) {
        if (numerator % i == 0 && denominator % i == 0) {
            return [numerator / i, denominator / i];
        }
    }
}