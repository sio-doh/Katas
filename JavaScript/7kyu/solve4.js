// https://www.codewars.com/kata/5a090c4e697598d0b9000004
// DESCRIPTION:
// In this Kata, you will be given an array of unique elements, 
// and your task is to rearrange the values so that the first 
// max value is followed by the first minimum, followed by 
// second max value then second min value, etc.
// For example:
//     solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max 
// is 12 and the second min is 10 and so on.
// More examples in the test cases.

function solve(arr) {
    const sortedArr = arr.sort((x, y) => { return y - x }); 
    const ans = []; 
    let start = 0; 
    let ending = sortedArr.length - 1;
    if (sortedArr.length % 2 == 1) {
        while (start != ending) { // while beginning hasn't met the end
            ans.push(sortedArr[start]);
            ans.push(sortedArr[ending]);
            start += 1; 
            ending -= 1;
        }
        ans.push(sortedArr[ending]);  }
    if (sortedArr.length % 2 == 0) {
        while (start < ending) { 
            ans.push(sortedArr[start]);
            ans.push(sortedArr[ending]);
            start += 1; 
            ending -= 1;
        }
    }
    return ans;
};