// https://www.codewars.com/kata/52829c5fe08baf7edc00122b
// DESCRIPTION:
// Write a function that returns the number of occurrences 
// of an element in an array.
// This function will be defined as a property of Array 
// with the help of the method Object.defineProperty, 
// which allows to define a new method directly on the 
// object (more info about that you can find on MDN).
// Examples
//     var arr = [0, 1, 2, 2, 3];
//     arr.numberOfOccurrences(0) === 1;
//     arr.numberOfOccurrences(4) === 0;
//     arr.numberOfOccurrences(2) === 2;
//     arr.numberOfOccurrences(3) === 1;

Array.prototype.numberOfOccurrences = function(n) { 
    let result = 0; 
    for (let i = 0; i < this.length; i++) {
        if (this[i] == n) {
            result++;
        }
    }
    return result;
}