# https://www.codewars.com/kata/5ef0456fcd067000321baffa
# DESCRIPTION:
# You will be given a string with sets of characters, 
# (i.e. words), seperated by between one and three spaces 
# (inclusive).
# Looking at the first letter of each word (case 
# insensitive-"A" and "a" should be treated the same), you 
# need to determine whether it falls into the positive/first 
# half of the alphabet ("a"-"m") or the negative/second 
# half ("n"-"z").
# Return True/true if there are more (or equal) positive words 
# than negative words, False/false otherwise.
#     "A big brown fox caught a bad rabbit" => True/true
#     "Xylophones can obtain Xenon." => False/false

def connotation(strng):
    first_half = "abcdefghijklm" 
    second_half = "nopqrstuvwxyz" 
    first_half_count = 0 
    second_half_count = 0 
    for word in strng.split(" "): 
        if word != "":
            if word[0].lower() in first_half: 
                first_half_count += 1 
            elif word[0].lower() in second_half:
                second_half_count += 1 
    if first_half_count >= second_half_count: 
        return True 
    else: 
        return False
