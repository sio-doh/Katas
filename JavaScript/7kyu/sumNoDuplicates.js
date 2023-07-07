// https://www.codewars.com/kata/5993fb6c4f5d9f770c0000f2
// DESCRIPTION:
// Please write a function that sums a list, but ignores 
// any duplicate items in the list.
// For instance, for the list [3, 4, 3, 6] , the function 
// should return 10.

function sumNoDuplicates(numList) {
    let ans = 0;
    for (let i = 0; i < numList.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < numList.length; j++) {
        if (i == j) {
            continue;
        } 
        if (numList[i] == numList[j]) {
            isDuplicate = true;
            break;
        }
        }
        if (!isDuplicate) {
        ans += numList[i];
        }
    }
    return ans;
}