/*
https://www.codewars.com/kata/55688b4e725f41d1e9000065 
DESCRIPTION: 
Give the summation of all even numbers in a Fibonacci 
sequence up to, but not including, the number passed 
to your function. Or, in other words, sum all the even 
Fibonacci numbers that are lower than the given number 
n (n is not the nth element of Fibonacci sequence) 
without including n.
The Fibonacci sequence is a series of numbers where 
the next value is the addition of the previous two 
values. The series starts with 0 and 1:
0 1 1 2 3 5 8 13 21...
For example: 
    fibonacci(0)==0
    fibonacci(33)==10
    fibonacci(25997544)==19544084
*/ 
function fibonacci(max) {
    let fibonacci = 0
    let fibonacciCurrent = 0
    let fibonacciBefore = 0 
    let sum = 0 
    for (let i = 0; fibonacci < max; i++) {
        if (i === 0) {
            fibonacci++
            fibonacciCurrent++
        } else {
            if (fibonacci % 2 === 0) {
                sum += fibonacci
            } 
            fibonacci = fibonacciCurrent + fibonacciBefore 
            fibonacciBefore = fibonacciCurrent 
            fibonacciCurrent = fibonacci
        }
    }
    return sum
}