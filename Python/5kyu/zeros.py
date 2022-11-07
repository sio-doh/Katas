# https://www.codewars.com/kata/52f787eb172a8b4ae1000a34
# DESCRIPTION:
# Write a program that will calculate the number of trailing 
# zeros in a factorial of a given number.
# N! = 1 * 2 * 3 *  ... * N
# Be careful 1000! has 2568 digits...
# For more info, see: http://mathworld.wolfram.com/Factorial.html
# Examples:
#     zeros(6) = 1
#       *N.B.* 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
#     zeros(12) = 2
#       *N.B.* 12! = 479001600 --> 2 trailing zeros
# Hint: You're not meant to calculate the factorial. Find another 
# way to find the number of zeros.

def zeros(n): 
    if (n < 0):
        return -1 
    count = 0 
    # keep dividing n by 5 & update count
    while (n >= 5):
        n //= 5 
        count += n 
    return count