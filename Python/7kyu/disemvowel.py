# https://www.codewars.com/kata/52fba66badcd10859f00097e/python
# DESCRIPTION: 
# Trolls are attacking your comment section!
# A common way to deal with this situation is to remove all 
# of the vowels from the trolls' comments, neutralizing the 
# threat.
# Your task is to write a function that takes a string and 
# return a new string with all vowels removed.
# For example, the string "This website is for losers LOL!" 
# would become "Ths wbst s fr lsrs LL!".
# Note: for this kata y isn't considered a vowel.

def disemvowel(string_):
    vowels = "AEIOUaeiou"
    new_list = [z for z in string_ if z not in vowels]
    return "".join(new_list)