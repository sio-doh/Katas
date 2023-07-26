# https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
# DESCRIPTION:
# This time no story, no theory. The examples below show 
# you how to write function accum:
# Examples:
#     accum("abcd") -> "A-Bb-Ccc-Dddd"
#     accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
#     accum("cwAt") -> "C-Ww-Aaa-Tttt"
# The parameter of accum is a string which includes only 
# letters from a..z and A..Z.

def accum(s):
    strng = ""
    for x in range(len(s)):
        temp_str = s[x].upper()
        temp_str += s[x].lower() * x + "-"
        strng += temp_str
    return strng[:-1]
