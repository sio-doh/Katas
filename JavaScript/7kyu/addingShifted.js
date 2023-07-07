// https://www.codewars.com/kata/57c7231c484cf9e6ac000090
// DESCRIPTION:
//     #Adding values of arrays in a shifted way
//     You have to write a method, that gets two parameter:
//         1. An array of arrays with int-numbers
//         2. The shifting value
//     #The method should add the values of the arrays to one 
//     new array.
//     The arrays in the array will all have the same size and 
//     this size will always be greater than 0.
//     The shifting value is always a value from 0 up to the 
//     size of the arrays.
//     There are always arrays in the array, so you do not need 
//     to check for null or empty.
//     #1. Example:
//         [[1,2,3,4,5,6], [7,7,7,7,7,-7]], 0

//         1,2,3,4,5,6
//         7,7,7,7,7,-7

//         --> [8,9,10,11,12,-1]
//     #2. Example
//         [[1,2,3,4,5,6], [7,7,7,7,7,7]], 3

//         1,2,3,4,5,6
//             7,7,7,7,7,7

//         --> [1,2,3,11,12,13,7,7,7]
//     #3. Example
//         [[1,2,3,4,5,6], [7,7,7,-7,7,7], [1,1,1,1,1,1]], 3

//         1,2,3,4,5,6
//             7,7,7,-7,7,7
//                     1,1,1,1,1,1

//         --> [1,2,3,11,12,13,-6,8,8,1,1,1]
// Have fun coding it and please don't forget to vote and rank 
// this kata! :-)
// I have created other katas. Have a look if you like coding 
// and challenges.

function addingShifted (arrayOfArrays, shift) {
    let ans = new Array(arrayOfArrays[0].length + (arrayOfArrays.length - 1) * shift).fill(0);
    for (let i = 0; i < arrayOfArrays.length; i++) {
        for (let j = 0; j < arrayOfArrays[i].length; j++) {
            ans[j + i * shift] += arrayOfArrays[i][j];
        }
    }
    return ans;
}