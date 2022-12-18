/*
https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39
DESCRIPTION: 
This time we want to write calculations using functions 
and get the results. Let's have a look at some examples:
    seven(times(five())); // must return 35
    four(plus(nine())); // must return 13
    eight(minus(three())); // must return 5
    six(dividedBy(two())); // must return 3
Requirements:
    There must be a function for each number from 0 
    ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical 
    operations: plus, minus, times, dividedBy
    Each calculation consist of exactly one operation and 
    two numbers
    The most outer function represents the left operand, the most 
    inner function represents the right operand
    Division should be integer division. For example, this should 
    return 2, not 2.666666...:

    eight(dividedBy(three()));
*/ 
function zero(expression) { return parseInt(numExp(0, expression)); }
function one(expression) { return parseInt(numExp(1, expression)); }
function two(expression) { return parseInt(numExp(2, expression)); }
function three(expression) { return parseInt(numExp(3, expression)); }
function four(expression) { return parseInt(numExp(4, expression)); }
function five(expression) { return parseInt(numExp(5, expression)); }
function six(expression) { return parseInt(numExp(6, expression)); }
function seven(expression) { return parseInt(numExp(7, expression)); }
function eight(expression) { return parseInt(numExp(8, expression)); }
function nine(expression) { return parseInt(numExp(9, expression)); }

function numExp(number, expression) {
    return expression == undefined ? number : expression(number);
}

function plus(a) { return function(b) { return b + a; } }
function minus(a) { return function(b) { return b - a; } }
function times(a) { return function(b) { return b * a; } }
function dividedBy(a) { return function(b) { return b / a; } }
