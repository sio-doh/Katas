# https://www.codewars.com/kata/52efefcbcdf57161d4000091
# DESCRIPTION 
# The main idea is to count all the occurring characters 
# in a string. If you have a string like aba, then the 
# result should be {'a': 2, 'b': 1}.
# What if the string is empty? Then the result should 
# be empty object literal, {}.
def count(string):
    return { c:string.count(c) for c in string }