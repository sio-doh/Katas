# https://www.codewars.com/kata/57eadb7ecd143f4c9c0000a3
# DESCRIPTION:
# Write a function to convert a name into initials. This 
# kata strictly takes two words with one space in between 
# them.
# The output should be two capital letters with a dot 
# separating them.
# It should look like this:
#     Sam Harris => S.H
#     patrick feeney => P.F

def abbrev_name(name): 
    names = name.split(" ")
    return names[0][0].upper() + "." + names[1][0].upper()
