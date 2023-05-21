// https://www.codewars.com/kata/55de9c184bb732a87f000055
// DESCRIPTION:
// Write a function that will take in any array and 
// reverse it.
// Sounds simple doesn't it?
// NOTES:
// Array should be reversed in place! (no need to return 
// it)
// Usual builtins have been deactivated. Don't count on 
// them.
// You'll have to do it fast enough, so think about 
// performances

function reverse(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i]; 
        arr[arr.length - 1 - i] = temp; 
    }
}