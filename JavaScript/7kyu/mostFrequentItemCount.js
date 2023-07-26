// https://www.codewars.com/kata/56582133c932d8239900002e
// DESCRIPTION:
// Complete the function to find the count of the most 
// frequent item of an array. You can assume that input 
// is an array of integers. For an empty array return 
// 0
// Example
//     input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
//     ouptut: 5 
// The most frequent number in the array is -1 and it 
// occurs 5 times.

function mostFrequentItemCount(collection) {
    return collection.length ? 
        Math.max(
            ...collection.map(
                el => collection.filter(
                    el2 => el2 == el
                ).length
            )
        ) : 0 
}