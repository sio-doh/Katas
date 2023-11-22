# https://www.codewars.com/kata/51f42b1de8f176db5a0002ae
# DESCRIPTION:
# This time the input is a sequence of course-ids that are 
# formatted in the following way:
#     name-yymm
# The return of the function shall first be sorted by yymm, 
# then by the name (which varies in length).

def sort_me(courses): 
    courses = [x.split("-") for x in courses]
    return [("-").join(x) for x in sorted(courses, key=lambda x: (x[1], x[0]))]
