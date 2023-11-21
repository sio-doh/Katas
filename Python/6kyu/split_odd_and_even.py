# https://www.codewars.com/kata/57a2ab1abb994466910003af
# DESCRIPTION:
# Task
# Complete function splitOddAndEven, accept a number 
#     n(n>0), return an array that contains the continuous 
#     parts of odd or even digits.
# Please don't worry about digit 0, it won't appear ;-)
# Examples
#     splitOddAndEven(123)  ===  [1,2,3]
#     splitOddAndEven(223)  ===  [22,3]
#     splitOddAndEven(111)  ===  [111]
#     splitOddAndEven(13579)  ===  [13579]
#     splitOddAndEven(135246)  ===  [135,246]
#     splitOddAndEven(123456)  ===  [1,2,3,4,5,6]

def split_odd_and_even(n):
    parts = []
    part = str(n)[0]
    n = str(n)[1:]
    for x in n:
        what = "even" if int(x) % 2 == 0 else "odd"
        what_last_in_part = "even" if int(part[-1]) %2 == 0 else "odd" 
        if what == what_last_in_part:
            part += x 
        else:
            parts.append(int(part)) 
            part = x 
    parts.append(int(part))
    return parts
