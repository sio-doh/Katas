/*
https://www.codewars.com/kata/58cb43f4256836ed95000f97
DESCRIPTION: 
In this simple exercise, you will create a program that 
will take two lists of integers, a and b. Each list 
will consist of 3 positive integers above 0, 
representing the dimensions of cuboids a and b. You 
must find the difference of the cuboids' volumes 
regardless of which is bigger.
For example, if the parameters passed are 
([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the 
volume of b is 20. Therefore, the function should 
return 8.
Your function will be tested with pre-made examples 
as well as random ones.
If you can, try writing it in one line of code.
*/ 
function findDifference(a, b) {
    let firstResult = a[0]; 
    let secondResult = b[0]; 
    for (let i = 1; i < a.length; i++) {
      firstResult *= a[i]; 
    }
    for (let j = 1; j < b.length; j++) {
      secondResult *= b[j];
    }
    return Math.abs(firstResult - secondResult);
}