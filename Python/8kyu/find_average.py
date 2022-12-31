# https://www.codewars.com/kata/57a2013acf1fa5bfc4000921 
# DESCRIPTION:
# Write a function which calculates the average of 
# the numbers in a given list.
# Note: Empty arrays should return 0.

def find_average(numbers):
    total = 0
    for i in numbers: 
        total += i 
    return total/len(numbers)