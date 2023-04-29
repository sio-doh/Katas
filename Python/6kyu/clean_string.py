# https://www.codewars.com/kata/5727bb0fe81185ae62000ae3
# DESCRIPTION:
# Assume "#" is like a backspace in string. This means that 
# string "a#bc#d" actually is "bd"
# Your task is to process a string with "#" symbols.
# Examples
#     "abc#d##c"      ==>  "ac"
#     "abc##d######"  ==>  ""
#     "#######"       ==>  ""
#     ""              ==>  ""

def clean_string(s):
    l = []
    for i in range(len(s)):
        if s[i] != "#":
            l.append(s[i])
        elif l and s[i] == "#":
            l.pop()
    return "".join(l)
