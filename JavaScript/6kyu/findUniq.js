/*
https://www.codewars.com/users/sio-doh/completed_solutions
DESCRIPTION: 
There is an array with some numbers. All numbers are equal except 
for one. Try to find it!
    findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
    findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.
The tests contain some very huge arrays, so think about performance.
*/ 
function findUniq(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
            return arr[i];
        } 
    }
}