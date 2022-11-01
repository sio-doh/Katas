/* 
https://www.codewars.com/kata/5b73fe9fb3d9776fbf00009e
DESCRIPTION:
Your task is to sum the differences between consecutive pairs 
in the array in descending order.
Example: [2, 1, 10]  -->  9
In descending order: [10, 2, 1]
Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9
If the array is empty or the array has only one element 
the result should be 0 (Nothing in Haskell, None in Rust).
*/ 
function sumOfDifferences(arr) { 
    let sum = 0
    const sorted = arr.sort(function(a, b) {
        return b - a
    })
    for (let i = 0; i < sorted.length - 1; i++) {
        console.log(sorted[i], sorted[i + 1]) 
        sum += (sorted[i] - sorted[i + 1])
    }
    return sum
}

sumOfDifferences([1, 2, 10])