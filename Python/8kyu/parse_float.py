# https://www.codewars.com/kata/57a386117cb1f31890000039
# DESCRIPTION:
# Write function parseF which takes an input and returns 
# a number or null if conversion is not possible. The 
# input can be one of many different types so be 
# aware.

def parse_float(string):
    if type(string) == list:
        string = "".join(string)
    try: 
        return float(string)
    except ValueError: 
        return None
