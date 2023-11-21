# https://www.codewars.com/kata/59df2f8f08c6cec835000012
# DESCRIPTION:
# John has invited some friends. His list is:
#     s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
# Could you make a program that
#     makes this string uppercase
#     gives it sorted in alphabetical order by last name.
# When the last names are the same, sort them by first name. 
#     Last name and first name of a guest come in the result 
#     between parentheses separated by a comma.
# So the result of function meeting(s) will be:
#     "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
# It can happen that in two distinct families with the same 
#     family name two people have the same first name too.
# Notes
#     You can see another examples in the "Sample tests".

def meeting(s):
    splitup = s.split(";")
    ans = []
    for x in splitup:
        temp = x.split(":")
        ans.append((temp[1].upper(), temp[0].upper())) 
    ans = sorted(ans, key=lambda x: (x[0], x[1]))
    ans_str = ""
    for x in ans:
        ans_str += f'({x[0]}, {x[1]})'
    return ans_str
