# https://www.codewars.com/kata/57cf50a7eca2603de0000090
# DESCRIPTION:
# Move every letter in the provided string forward 10 
# letters through the alphabet.
# If it goes past 'z', start again at 'a'.
# Input will be a string with length > 0.

import string 

def move_ten(st):
    new_st = ""
    for c in st:
        i = string.ascii_lowercase.index(c)
        if i + 10 > 25:
            i = i + 10 - 26 
            new_st += string.ascii_lowercase[i]
        else:
            new_st += string.ascii_lowercase[i + 10]
    return new_st
