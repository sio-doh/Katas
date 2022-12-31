# https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
# DESCRIPTION:
# Simple, given a string of words, return the length 
# of the shortest word(s).
# String will never be empty and you do not need to 
# account for different data types.

def find_short(s):
    list = s.split()
    length = float('inf')
    for word in list: 
        if (len(word) < length): 
            length = len(word)
    return length
