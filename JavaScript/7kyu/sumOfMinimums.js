// https://www.codewars.com/kata/5d5ee4c35162d9001af7d699
// DESCRIPTION:
// Given a 2D ( nested ) list ( array, vector, .. ) of 
// size m * n, your task is to find the sum of the 
// minimum values in each row.
// For Example:
//     [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
//     , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
//     , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
//     ]
// So the function should return 26 because the sum of the 
// minimums is 1 + 5 + 20 = 26.
// Note: You will always be given a non-empty list containing 
// positive values.

function sumOfMinimums(arr) {
    let result = 0, 
        temp = 0;
    for (let i = 0; i < arr.length; i++) {
        temp = arr[i][0];
        for (let j = 1; j < arr[i].length; j++) {
            if (temp > arr[i][j]) {
                temp = arr[i][j];
            }
        }
        result += temp;
    } 
    return result;
}