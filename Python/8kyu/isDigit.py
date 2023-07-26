# https://www.codewars.com/kata/57126304cdbf63c6770012bd
# DESCRIPTION:
# Given a string s, write a method (function) that will 
# return true if its a valid single integer or floating 
# number or false if its not.
# Valid examples, should return true:
#     isDigit("3")
#     isDigit("  3  ")
#     isDigit("-3.23")
# should return false:
#     isDigit("3-4")
#     isDigit("  3   5")
#     isDigit("3 5")
#     isDigit("zero")

def isDigit(string):
    try: 
        float(string) 
        return True
    except:
        return False
