# https://www.codewars.com/kata/564e7fc20f0b53eb02000106
# DESCRIPTION:
# Complete the function that takes a string of 
# English-language text and returns the number of 
# consonants in the string.
# Consonants are all letters used to write English 
# excluding the vowels a, e, i, o, u.

def consonant_count(s):
    return len([x for x in s if x.isalpha() if x.lower() not in "aeiou"])
