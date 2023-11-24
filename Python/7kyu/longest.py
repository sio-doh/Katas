# https://www.codewars.com/kata/5656b6906de340bd1b0000ac
# DESCRIPTION:
# Take 2 strings s1 and s2 including only letters from a 
# to z. Return a new sorted string, the longest possible, 
# containing distinct letters - each taken only once - coming 
# from s1 or s2.
# Examples:
#     a = "xyaabbbccccdefww"
#     b = "xxxxyyyyabklmopq"
#     longest(a, b) -> "abcdefklmopqwxy"

#     a = "abcdefghijklmnopqrstuvwxyz"
#     longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

def longest(a1, a2):
    new_list = [] 
    a1 = a1 + a2
    for i in a1: 
        if i not in new_list:
            new_list.append(i)
    return "".join(sorted(new_list))
