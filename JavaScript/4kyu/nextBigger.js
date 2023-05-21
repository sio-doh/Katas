// https://www.codewars.com/kata/55983863da40caa2c900004e
// DESCRIPTION:
// Create a function that takes a positive integer and returns 
// the next bigger number that can be formed by rearranging 
// its digits. For example:
//       12 ==> 21
//      513 ==> 531
//     2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, 
// return -1 (or nil in Swift, None in Rust):
//       9 ==> -1
//     111 ==> -1
//     531 ==> -1

function nextBigger(n) {
    let arr = n.toString().split("").reverse();
    let i = arr.findIndex((d, _i) => d < arr[_i - 1]);
    if (i === -1) return -1;
    let subarr = arr.slice(0, i);
    let j = subarr.findIndex((d) => d > arr[i]);
    subarr.splice(j, 1, arr[i]);
    return parseInt(arr.slice(i + 1).reverse().concat(arr[j]).concat(subarr).join(""));
}