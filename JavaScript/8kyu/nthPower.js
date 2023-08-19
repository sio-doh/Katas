// https://www.codewars.com/kata/57d814e4950d8489720008db
// You are given an array with positive numbers and a number N. 
// You should find the N-th power of the element in the array 
// with the index N. If N is outside of the array, then 
// return -1. Don't forget that the first element has the 
// index 0.

function index(array, n) {
    return array[n] ** n || -1;
}