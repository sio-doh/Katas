/*
https://www.codewars.com/kata/523f5d21c841566fde000009
DESCRIPTION: 
Your goal in this kata is to implement a difference function, 
which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in 
list b keeping their order.
arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be 
removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/ 
function arrayDiff(a, b) {
    if (a.length == 0) { return [] }
    if (b.length == 0) { return a } 
    let returnArr = [];
    a.forEach(function included(el) {
        // if el is not included in "b", push it to "returnArr"
        if (!b.includes(el)) { returnArr.push(el)}
    })  
    return returnArr;
}