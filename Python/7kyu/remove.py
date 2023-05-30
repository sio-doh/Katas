# https://www.codewars.com/kata/57fafb6d2b5314c839000195
# DESCRIPTION:
# Remove words from the sentence if they contain exactly 
# one exclamation mark. Words are separated by a single 
# space, without leading/trailing spaces.
# Examples
#     remove("Hi!") === ""
#     remove("Hi! Hi!") === ""
#     remove("Hi! Hi! Hi!") === ""
#     remove("Hi Hi! Hi!") === "Hi"
#     remove("Hi! !Hi Hi!") === ""
#     remove("Hi! Hi!! Hi!") === "Hi!!"
#     remove("Hi! !Hi! Hi!") === "!Hi!"

def remove(s):
    output = []
    for word in s.split(" "):
        if word.count("!") != 1:
            output.append(word)
    return " ".join(output)
