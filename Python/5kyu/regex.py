# https://www.codewars.com/kata/52e1476c8147a7547a000811
# DESCRIPTION 
# You need to write regex that will validate a password to 
# make sure it meets the following criteria:
    # At least six characters long
    # contains a lowercase letter
    # contains an uppercase letter
    # contains a digit
    # only contains alphanumeric characters (note that '_' is not alphanumeric)

regex="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\W_]{6,}$"
# ^              begin word
# (?=.*?[a-z])   at least one lowercase letter
# (?=.*?[A-Z])   at least one uppercase letter
# (?=.*?[0-9])   at least one number
# [A-Za-z\d]     only alphanumeric
# {6,}           at least 6 characters long
# $              end word

