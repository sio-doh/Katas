# https://www.codewars.com/kata/5239f06d20eeab9deb00049b
# DESCRIPTION:
# The function 'fibonacci' should return an array of 
# fibonacci numbers. The function takes a number as an 
# argument to decide how many no. of elements to produce. 
# If the argument is less than or equal to 0 then return 
# empty array
# Example:
#     fibonacci(4) // should return  [0,1,1,2]
#     fibonacci(-1) // should return []

def fibonacci(n):
    if n < 1:
        return []
    elif n == 1:
        return [0]
    else:
        seq = [0, 1]
        while len(seq) != n:
            seq.append(seq[-2] + seq[-1])
        return seq
