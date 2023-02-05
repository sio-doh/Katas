# https://www.codewars.com/kata/5266876b8f4bf2da9b000362
# DESCRIPTION:
# You probably know the "like" system from Facebook and 
# other pages. People can "like" blog posts, pictures or 
# other items. We want to create the text that should be 
# displayed next to such an item.
# Implement the function which takes an array containing 
# the names of people that like an item. It must return 
# the display text as shown in the examples:
#     []                                -->  "no one likes this"
#     ["Peter"]                         -->  "Peter likes this"
#     ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
#     ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
#     ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
# Note: For 4 or more names, the number in "and 2 others" 
# simply increases.

def likes(names):
    if names == []:
        return "no one likes this"
    elif len(names) < 4: 
        result = names[0]
        for i in range (1, len(names[1:]) + 1):
            symbol = ", " if i != len(names[1:]) else " and "
            result += symbol + names[i] 
        if len(names) == 1: 
            result += " likes this"
        else:
            result += " like this"
        return result
    else:
        result = f"{names[0]}, {names[1]} and {len(names[2:])} others like this"
        return result
