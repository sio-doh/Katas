# https://www.codewars.com/kata/57e35f1bc763b8ccce000038
# DESCRIPTION:
# Your users' passwords were all stolen in the Yahoo! 
# hack, and it turns out they have been lax in creating 
# secure passwords. Create a function that checks their 
# new password (passed as a string) to make sure it meets 
# the following requirements:
#     Between 8 - 20 characters
#     Contains only the following characters (and at least one character from each category):
#     uppercase letters,
#     lowercase letters,
#     digits,
#     special characters from !@#$%^&*?
# Return "valid" if passed or "not valid" otherwise.

import numpy as np

def check_password(s):
    if (len(s) < 8) | (len(s) > 20):
        return "not valid"
    upper_chars = 0
    lower_chars = 0
    digit_chars = 0
    special_chars = 0
    invalid_chars = 0
    for letter in s:
        if letter in "!@#$%^&*?":
            special_chars += 1
        elif letter.isupper():
            upper_chars += 1
        elif letter.islower():
            lower_chars += 1
        elif letter.isdigit():
            digit_chars += 1
        else:
            invalid_chars += 1
    if ((np.array([upper_chars, lower_chars, digit_chars, special_chars]) >= 1).all()) & (invalid_chars == 0):
        return "valid"
    else:
        return "not valid"
