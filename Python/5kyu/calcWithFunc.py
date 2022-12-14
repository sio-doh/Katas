# https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/python
# DESCRIPTION:
# This time we want to write calculations using functions 
# and get the results. Let's have a look at some examples:
#     seven(times(five())) # must return 35
#     four(plus(nine())) # must return 13
#     eight(minus(three())) # must return 5
#     six(divided_by(two())) # must return 3
# Requirements:
#     There must be a function for each number from 0 
#     ("zero") to 9 ("nine")
#     There must be a function for each of the following mathematical 
#     operations: plus, minus, times, dividedBy
#     Each calculation consist of exactly one operation and 
#     two numbers
#     The most outer function represents the left operand, the most 
#     inner function represents the right operand
#     Division should be integer division. For example, this should 
#     return 2, not 2.666666...:

#     eight(dividedBy(three())); 
def zero(f = None): return 0 if not f else int(f(0)) 
def one(f = None): return 1 if not f else int(f(1))
def two(f = None): return 2 if not f else int(f(2))
def three(f = None): return 3 if not f else int(f(3))
def four(f = None): return 4 if not f else int(f(4))
def five(f = None): return 5 if not f else int(f(5))
def six(f = None): return 6 if not f else int(f(6))
def seven(f = None): return 7 if not f else int(f(7))
def eight(f = None): return 8 if not f else int(f(8))
def nine(f = None): return 9 if not f else int(f(9))

def plus(b): return lambda a: a+b 
def minus(b): return lambda a: a-b 
def times(b): return lambda a: a*b 
def divided_by(b): return lambda a: a/b 