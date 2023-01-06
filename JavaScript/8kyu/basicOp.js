/*
https://www.codewars.com/kata/57356c55867b9b7a60000bd7
DESCRIPTION: 
Your task is to create a function that does four basic 
mathematical operations.
The function should take three arguments - 
operation(string/char), value1(number), value2(number).
The function should return result of numbers after 
applying the chosen operation.
Examples(Operator, value1, value2) --> output
    ('+', 4, 7) --> 11
    ('-', 15, 18) --> -3
    ('*', 5, 5) --> 25
    ('/', 49, 7) --> 7
*/

function basicOp(operation, value1, value2) {
    return eval(value1 + operation + value2);
}
