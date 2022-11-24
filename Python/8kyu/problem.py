# https://www.codewars.com/kata/55a5bfaa756cfede78000026
# DESCRIPTION 
# Make a function that returns the value 
# multiplied by 50 and increased by 6. If 
# the value entered is a string it should 
# return "Error".

def problem(a):
    return (a*50)+6 if type(a) != str else "Error" 
