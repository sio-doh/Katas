# https://www.codewars.com/kata/585d7d5adb20cf33cb000235
# DESCRIPTION:
# There is an array with some numbers. All numbers are equal 
# except for one. Try to find it!
#     findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
#     findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
# It’s guaranteed that array contains at least 3 numbers.
# The tests contain some very huge arrays, so think about 
# performance.

def find_uniq(arr):
    dict_num = {} 
    for n in arr: 
        if n not in dict_num: dict_num[n] = 1
        else: dict_num[n] += 1
    for a, b in dict_num.items(): 
        if b == 1: return a
