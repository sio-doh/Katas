// https://www.codewars.com/kata/5a1ebc2480171f29cf0000e5
// DESCRIPTION:
// In this kata you will be given a sequence of the 
// dimensions of rectangles ( sequence with width and 
// length ) and circles ( radius - just a number ).
// Your task is to return a new sequence of dimensions, 
// sorted ascending by area.
// For example,
//     const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
//     sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
// This kata inspired by Sort rectangles and circles by area: 
// https://www.codewars.com/kata/sort-rectangles-and-circles-by-area/.

function sortByArea(array) {
    return [...array].sort((a, b) => (typeof a == "number" ? Math.PI * a ** 2 : a[0] * a[1]) - 
                                     (typeof b == "number" ? Math.PI * b ** 2 : b[0] * b[1]));
}