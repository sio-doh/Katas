# https://www.codewars.com/kata/586538146b56991861000293
# DESCRIPTION:
#     The idea for this kata came from 9gag today:
# Task
#     You'll have to translate a string to Pilot's alphabet (NATO 
#     phonetic alphabet).
# Input:
#     If, you can read?
# Output:
#     India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo 
#     Echo Alfa Delta ?
# Note:
#     There are preloaded dictionary you can use, named NATO
#     The set of used punctuation is ,.!?.
#     Punctuation should be kept in your return string, but spaces 
#         should not.
#     Xray should not have a dash within.
#     Every word and punctuation mark should be seperated by a space 
#         ' '.
#     There should be no trailing whitespace

def to_nato(words): 
    codes = {"a": "Alfa", "b": "Bravo", "c": "Charlie", "d": "Delta", "e": "Echo", "f": "Foxtrot", 
            "g": "Golf", "h": "Hotel", "i": "India", "j": "Juliett", "k": "Kilo", "l": "Lima", 
            "m": "Mike", "n": "November", "o": "Oscar", "p": "Papa", "q": "Quebec", "r": "Romeo", 
            "s": "Sierra", "t": "Tango", "u": "Uniform", "v": "Victor", "w": "Whiskey", "x": "Xray", 
            "y": "Yankee", "z": "Zulu"}
    ans = [] 
    for c in words:
        if c.isalpha():
            ans.append(codes[c.lower()])
        elif c == " ":
            pass
        else:
            ans.append(c)
    return " ".join(ans)
